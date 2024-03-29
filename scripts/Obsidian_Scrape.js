const fs = require('fs');
const path = require('path');
const obsidianVaultPath = '../../Documents/Obsidian Vault'

// Function to parse a Markdown file and extract the title and links
const parseMarkdownFile = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');

  // Regular expression to match Markdown links like [[Link]]
  const linkRegex = /\[\[([^[\]]+)\]\]/g;
  let match;
  const links = [];

  while ((match = linkRegex.exec(content)) !== null) {
    links.push(match[1]); // Add the linked page title to the links array
  }

  return { links };
};

// Read all markdown files and generate nodes and edges
const files = fs.readdirSync(obsidianVaultPath).filter(file => file.endsWith('.md'));
const nodes = [];
const edges = [];

files.forEach(file => {
  const { links } = parseMarkdownFile(path.join(obsidianVaultPath, file));
  const noteTitle = path.basename(file, '.md');

  // Add the current file as a node
  nodes.push({ 
    "id": noteTitle,
    "label": noteTitle ,
    "group": 1,
    "url": `notes/${file}`
    });

  // Add links as edges
  links.forEach(linkTitle => {
    const targetFile = files.find(f => f.startsWith(linkTitle));
    if (targetFile) {
        const targetId = path.basename(targetFile, '.md');
        edges.push({ source: noteTitle, target: path.basename(targetId, '.md') });
    }
  });
});

// Output nodes and edges to a JSON file
const graph = { nodes, edges };
fs.writeFileSync('obsidianGraph.json', JSON.stringify(graph, null, 2));
