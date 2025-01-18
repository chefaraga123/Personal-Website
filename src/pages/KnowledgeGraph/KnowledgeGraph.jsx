import React, { useEffect, useState, useRef } from 'react';
import { ForceGraph2D } from 'react-force-graph';
import ReactMarkdown from 'react-markdown';
import styles from './KnowledgeGraph.module.css';
import Navigation from '../../components/Navigation/Navigation';

const KnowledgeGraph = () => {
    const [graphData, setGraphData] = useState({ nodes: [], links: [] });
    const [showLabels, setShowLabels] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredNodes, setFilteredNodes] = useState([]);
    const [markdownContent, setMarkdownContent] = useState('');
    const [selectedNode, setSelectedNode] = useState(null);

    useEffect(() => {
        fetch('/obsidianGraph.json')
            .then(response => response.json())
            .then(data => {
                setGraphData(data);
                setFilteredNodes(data.nodes);
            })
            .catch(error => {
                console.error('Error fetching graph data:', error);
            });
    }, []);

    useEffect(() => {
        const filtered = graphData.nodes.filter(node =>
            node.label.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredNodes(filtered);
    }, [searchQuery, graphData.nodes]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleNodeClick = (node) => {
        if (node.url) {
            window.open(`/notes/${node.id}`, '_blank');
        } else {
            const notePath = encodeURIComponent(`/notes/${node.id}`);
            window.open(`/notes/${notePath}`, '_blank');
        }
    };

    const renderNode = (node, ctx, globalScale) => {
        const label = node.label;
        const fontSize = 12 / globalScale;
        ctx.font = `${fontSize}px Sans-Serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = node.color || 'rgba(255, 255, 255, 0.7)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.fillStyle = 'black';
        if (showLabels) {
            ctx.fillText(label, node.x, node.y + 15);
        }
    };

    const toggleLabels = () => {
        setShowLabels(!showLabels);
    };

    const graphContainer = useRef(null);

    return (
        <div className={styles.graphContainer} ref={graphContainer}>
            <Navigation />
            <input
                type="text"
                placeholder="Search nodes..."
                value={searchQuery}
                onChange={handleSearchChange}
                className={styles.searchInput}
            />
            <button style={styles.button} onClick={toggleLabels}>
                {showLabels ? 'Hide Labels' : 'Show Labels'}
            </button>
            <ForceGraph2D
                graphData={{ nodes: filteredNodes, links: graphData.links }}
                nodeLabel="name"
                nodeAutoColorBy="group"
                linkDirectionalParticles="value"
                linkDirectionalParticleWidth={link => Math.sqrt(link.value)}
                onNodeClick={handleNodeClick}
                nodeCanvasObject={renderNode}
                nodeCanvasObjectMode={() => 'before'}
                onNodeDragEnd={(node) => {
                    node.fx = null;
                    node.fy = null;
                }}
            />
            {selectedNode && (
                <div className={styles.markdownContainer}>
                    <h2>{selectedNode.label}</h2>
                    <ReactMarkdown>{markdownContent}</ReactMarkdown>
                </div>
            )}
        </div>
    );
};

export default KnowledgeGraph;
