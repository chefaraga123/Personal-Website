import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ForceGraph2D } from 'react-force-graph';
import styles from './KnowledgeGraph.module.css';
import Navigation from '../../components/Navigation/Navigation';
import { useNavigate } from 'react-router-dom';

const KnowledgeGraph = () => {
    const navigate = useNavigate();

    const [graphData, setGraphData] = useState({ nodes: [], links: [] });

    // When enabled, we render labels, but only for "important" nodes (selected, hovered, search matches, neighbors).
    // Rendering every label makes the graph unusable on mobile.
    const [showLabels, setShowLabels] = useState(false);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedNode, setSelectedNode] = useState(null);
    const [hoverNode, setHoverNode] = useState(null);

    const fgRef = useRef(null);
    const lastTapRef = useRef({ nodeId: null, atMs: 0 });

    useEffect(() => {
        fetch('/obsidianGraph.json')
            .then(response => response.json())
            .then(data => {
                setGraphData(data);
            })
            .catch(error => {
                console.error('Error fetching graph data:', error);
            });
    }, []);

    const adjacency = useMemo(() => {
        // Map nodeId -> Set(neighborIds)
        const map = new Map();
        for (const n of graphData.nodes) map.set(n.id, new Set());
        for (const l of graphData.links) {
            const s = typeof l.source === 'object' ? l.source.id : l.source;
            const t = typeof l.target === 'object' ? l.target.id : l.target;
            if (!map.has(s)) map.set(s, new Set());
            if (!map.has(t)) map.set(t, new Set());
            map.get(s).add(t);
            map.get(t).add(s);
        }
        return map;
    }, [graphData.nodes, graphData.links]);

    const searchMatches = useMemo(() => {
        const q = searchQuery.trim().toLowerCase();
        if (!q) return [];
        return graphData.nodes.filter(n => (n.label || '').toLowerCase().includes(q));
    }, [searchQuery, graphData.nodes]);

    const highlightedNodeIds = useMemo(() => {
        const ids = new Set();

        // Search matches
        for (const n of searchMatches) ids.add(n.id);

        // Selected + 1-hop neighborhood
        if (selectedNode?.id) {
            ids.add(selectedNode.id);
            const neigh = adjacency.get(selectedNode.id);
            if (neigh) for (const id of neigh) ids.add(id);
        }

        // Hovered
        if (hoverNode?.id) ids.add(hoverNode.id);

        return ids;
    }, [searchMatches, selectedNode, hoverNode, adjacency]);

    const nodeDegree = useMemo(() => {
        const deg = new Map();
        for (const n of graphData.nodes) deg.set(n.id, 0);
        for (const l of graphData.links) {
            const s = typeof l.source === 'object' ? l.source.id : l.source;
            const t = typeof l.target === 'object' ? l.target.id : l.target;
            deg.set(s, (deg.get(s) || 0) + 1);
            deg.set(t, (deg.get(t) || 0) + 1);
        }
        return deg;
    }, [graphData.nodes, graphData.links]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const focusNode = (node) => {
        if (!node || !fgRef.current) return;
        setSelectedNode(node);

        // A gentle focus that works well on mobile.
        fgRef.current.centerAt(node.x, node.y, 800);
        fgRef.current.zoom(3, 800);
    };

    const handleSearchKeyDown = (event) => {
        if (event.key !== 'Enter') return;
        const first = searchMatches[0];
        if (first) focusNode(first);
    };

    const openNodeNote = (node) => {
        const nodeId = node.id.replace(/ /g, '_');
        navigate(`/notes/${nodeId}`);
    };

    const handleNodeClick = (node) => {
        // Mobile-friendly: first tap selects (highlights + labels). Second tap opens the note.
        const now = Date.now();
        const last = lastTapRef.current;
        const sameNode = last.nodeId === node.id;
        const withinWindow = now - last.atMs < 700;

        lastTapRef.current = { nodeId: node.id, atMs: now };

        if (sameNode && withinWindow) {
            openNodeNote(node);
            return;
        }

        focusNode(node);
        if (!showLabels) setShowLabels(true);
    };

    const renderNode = (node, ctx, globalScale) => {
        const isHighlighted = highlightedNodeIds.has(node.id);
        const isSelected = selectedNode?.id === node.id;

        // Node dot
        const baseR = 4;
        const r = isSelected ? 7 : isHighlighted ? 5.5 : baseR;

        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, 2 * Math.PI, false);
        ctx.fillStyle = isSelected
            ? 'rgba(255, 99, 71, 0.95)'
            : isHighlighted
                ? 'rgba(52, 152, 219, 0.9)'
                : 'rgba(180, 200, 220, 0.75)';
        ctx.fill();

        // Labels
        // Default: only show labels for nodes with >3 connections.
        // Always allow highlighted nodes (search/hover/selected) so the UI still feels responsive.
        const degree = nodeDegree.get(node.id) || 0;
        const shouldLabel = showLabels && (degree > 3 || isHighlighted);

        if (shouldLabel) {
            const label = node.label;
            const fontSize = Math.max(10, 14 / globalScale);
            ctx.font = `${fontSize}px Sans-Serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Simple collision avoidance: skip labels whose bounding box would overlap
            // a label already drawn this frame.
            const boxes = ctx.__labelBoxes || (ctx.__labelBoxes = []);
            const textWidth = ctx.measureText(label).width;
            const padX = 6;
            const padY = 4;
            const x = node.x;
            const y = node.y + 16;
            const box = {
                x1: x - textWidth / 2 - padX,
                y1: y - fontSize / 2 - padY,
                x2: x + textWidth / 2 + padX,
                y2: y + fontSize / 2 + padY,
            };

            const overlaps = boxes.some(b => !(box.x2 < b.x1 || box.x1 > b.x2 || box.y2 < b.y1 || box.y1 > b.y2));
            if (overlaps) return;
            boxes.push(box);

            // White halo for legibility
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'rgba(255,255,255,0.9)';
            ctx.strokeText(label, x, y);

            ctx.fillStyle = 'rgba(0,0,0,0.9)';
            ctx.fillText(label, x, y);
        }
    };

    const toggleLabels = () => {
        setShowLabels(!showLabels);
    };

    return (
        <div className={styles.graphContainer}>
            <Navigation />

            <div className={styles.controls}>
                <input
                    type="text"
                    placeholder="Search nodes (Enter to focus)…"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyDown={handleSearchKeyDown}
                    className={styles.searchInput}
                />
                <button className={styles.button} onClick={toggleLabels}>
                    {showLabels ? 'Hide Labels' : 'Show Labels'}
                </button>
                <div className={styles.hint}>
                    Tip: tap a node to highlight; tap again to open the note.
                </div>
            </div>

            <ForceGraph2D
                ref={fgRef}
                graphData={graphData}
                nodeAutoColorBy="group"
                onNodeClick={handleNodeClick}
                onNodeHover={setHoverNode}
                onRenderFramePre={(ctx) => {
                    // Reset label collision state each frame.
                    ctx.__labelBoxes = [];
                }}
                nodeCanvasObject={renderNode}
                nodeCanvasObjectMode={() => 'before'}
                linkColor={() => 'rgba(120,120,120,0.35)'}
                onNodeDragEnd={(node) => {
                    node.fx = null;
                    node.fy = null;
                }}
            />
        </div>
    );
};

export default KnowledgeGraph;
