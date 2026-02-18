#!/usr/bin/env python3
"""
sync_notes.py — Sync approved Obsidian vault folders to public/notes/
and regenerate obsidianGraph.json.

Usage:
    python3 sync_notes.py           # preview (dry run)
    python3 sync_notes.py --apply   # apply changes
"""

import os
import re
import sys
import json
import shutil
from pathlib import Path

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

VAULT_ROOT   = Path("/Users/jamesoleary/Documents/James/Non-Work")
PUBLIC_NOTES = Path("public/notes")
GRAPH_FILE   = Path("public/obsidianGraph.json")

# Notes to never publish, even if they appear in approved folders
EXCLUDED_NOTES = {
    "Enoch_Powell.md",
}

APPROVED_FOLDERS = [
    "Biotech",
    "Databases",
    "Defence",
    "Economics",
    "Game Design",
    "History",
    "Linguistics",
    "Maths",
    "Metallurgy",
    "Pedagogy",
    "Philosophy",
    "Politics",
    "Science",
    "Sociology",
]

# Notes already published that should be kept even if not from the vault folders
# (ML, cryptography, ZK content)
PRESERVE_PATTERNS = [
    r"machine.?learning",
    r"natural.?language.?processing",
    r"applications.?of.?machine",
    r"hugging.?face",
    r"pytorch",
    r"datasets.?python",
    r"transformers",
    r"practical.?deep.?learning",
    r"learning.?to.?use.?hugging",
    r"cryptograph",
    r"asymmetric.?key",
    r"symmetric.?key",
    r"public.?key",
    r"digital.?signature",
    r"rsa.?encryption",
    r"zero.?knowledge",
    r"zk.?snark",
    r"^snark",
    r"^nark",
    r"schnorr",
    r"interactive.?proof",
    r"^np.?proof",
    r"zk.?in.?gaming",
    r"programming.?zkp",
    r"zk.?evm",
    r"security.?definition",
    r"three.?main.?security",
    r"left.?vs.?right",
    r"real.?vs.?randomness",
    r"kerchoffs",
    r"chosen.?plaintext",
    r"cryptographic",
    r"languages.?in.?cryptography",
    r"elliptic.?curve",
    r"modular.?arithmetic",
    r"quadratic.?residue",
    r"discrete.?logarithm",
    r"functional.?commitment",
    r"rank.?1.?constraint",
    r"r1cs",
    r"arithmetic.?circuit",
    r"boolean.?circuit",
    r"circom",
    r"installing.?circom",
    r"using.?circom",
]

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def normalise_filename(stem: str) -> str:
    return stem.replace(" ", "_") + ".md"

def get_title(content: str, fallback: str) -> str:
    for line in content.splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return fallback.replace("_", " ")

def should_preserve(filename: str) -> bool:
    key = filename.lower().replace("-", ".").replace("_", ".")
    return any(re.search(p, key) for p in PRESERVE_PATTERNS)

def get_wikilinks(content: str) -> list:
    return re.findall(r'\[\[([^\]|#\n]+?)(?:\|[^\]\n]+)?\]\]', content)

# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main(dry_run: bool):
    mode = "DRY RUN" if dry_run else "APPLYING"
    print(f"\n=== sync_notes.py ({mode}) ===\n")

    # 1. Collect vault notes from approved folders
    vault_notes = {}  # normalised_filename -> source Path
    for folder in APPROVED_FOLDERS:
        folder_path = VAULT_ROOT / folder
        if not folder_path.exists():
            print(f"  WARNING: vault folder not found: {folder_path}")
            continue
        for md_file in sorted(folder_path.glob("*.md")):
            fname = normalise_filename(md_file.stem)
            if fname not in EXCLUDED_NOTES:
                vault_notes[fname] = md_file
    print(f"Vault notes from approved folders: {len(vault_notes)}")

    # 2. Currently published notes
    current_published = {f.name for f in PUBLIC_NOTES.glob("*.md")}
    print(f"Currently published:               {len(current_published)}")

    # 3. Removals: published but not in vault AND not preserved
    to_remove = sorted(
        f for f in current_published
        if f not in vault_notes and not should_preserve(f)
    )
    print(f"To remove:                         {len(to_remove)}")
    for f in to_remove:
        print(f"  - {f}")

    # 4. Additions: vault notes not yet published
    to_add = sorted(f for f in vault_notes if f not in current_published)
    print(f"\nTo add:                            {len(to_add)}")
    for f in to_add:
        print(f"  + {f}")

    # 5. Updates: vault notes already published but content differs
    to_update = []
    for fname, src in vault_notes.items():
        dest = PUBLIC_NOTES / fname
        if dest.exists():
            src_text  = src.read_text(encoding="utf-8", errors="ignore")
            dest_text = dest.read_text(encoding="utf-8", errors="ignore")
            if src_text != dest_text:
                to_update.append(fname)
    print(f"To update (content changed):       {len(to_update)}")

    if dry_run:
        print("\nRun with --apply to execute.\n")
        return

    # --- Apply ---

    for fname in to_remove:
        (PUBLIC_NOTES / fname).unlink()

    for fname, src in vault_notes.items():
        dest = PUBLIC_NOTES / fname
        content = src.read_text(encoding="utf-8", errors="ignore")
        dest.write_text(content, encoding="utf-8")

    print(f"\nRemoved {len(to_remove)}, added {len(to_add)}, updated {len(to_update)} notes.")

    # 6. Regenerate obsidianGraph.json
    all_notes = sorted(PUBLIC_NOTES.glob("*.md"))

    nodes = []
    node_index = {}  # normalised key -> node id

    for note_path in all_notes:
        stem    = note_path.stem
        content = note_path.read_text(encoding="utf-8", errors="ignore")
        title   = get_title(content, stem)
        nodes.append({
            "id":    stem,
            "label": title,
            "group": 1,
            "url":   f"notes/{note_path.name}",
        })
        # Index under multiple normalisations for wikilink resolution
        node_index[stem.lower()]                       = stem
        node_index[stem.lower().replace("_", " ")]     = stem
        node_index[stem.lower().replace("_", "-")]     = stem

    links = []
    seen  = set()

    for note_path in all_notes:
        source_id = note_path.stem
        content   = note_path.read_text(encoding="utf-8", errors="ignore")
        for wikilink in get_wikilinks(content):
            key = wikilink.strip().lower()
            target_id = (
                node_index.get(key)
                or node_index.get(key.replace(" ", "_"))
                or node_index.get(key.replace("-", "_"))
            )
            if target_id and target_id != source_id:
                edge = (source_id, target_id)
                if edge not in seen:
                    links.append({"source": source_id, "target": target_id})
                    seen.add(edge)

    graph = {"nodes": nodes, "links": links}
    GRAPH_FILE.write_text(json.dumps(graph, indent=2), encoding="utf-8")
    print(f"obsidianGraph.json regenerated — {len(nodes)} nodes, {len(links)} links.\n")


if __name__ == "__main__":
    dry_run = "--apply" not in sys.argv
    main(dry_run)
