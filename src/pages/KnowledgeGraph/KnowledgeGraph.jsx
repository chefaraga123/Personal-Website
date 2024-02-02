import React, { useEffect, useState, useRef } from 'react';
import { ForceGraph2D } from 'react-force-graph';
import styles from './KnowledgeGraph.module.css';
import Navigation from '../../components/Navigation/Navigation';

const KnowledgeGraph = () => {
    const [graphData, setGraphData] = useState({ nodes: [], links: [] });
    const [showLabels, setShowLabels] = useState(true); // State to track label visibility


    useEffect(() => {
      // Fetch the graph data from the 'public' directory
      fetch('/Personal-Website/obsidianGraph.json')
        .then(response => response.json())
        .then(data => {
          // Set the graph data to state
          setGraphData(data);
        })
        .catch(error => {
          // Handle any errors in fetching or parsing the data
          console.error('Error fetching graph data:', error);
        });
    }, []); // The empty dependency array ensures this effect runs only once after the initial render
  
    
    const handleNodeClick = (node) => {
      const baseURL = process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/personal-website/'
        : process.env.PUBLIC_URL;
  
        const notePath = node.url;
        const fullPath = `${baseURL}${notePath}`;
          
        // If you're using React Router, you might use history.push(url)
        window.location.href = fullPath; // Or open the URL in a new tab with window.open(url, '_blank');
    };

    /*
    const handleZoom = (zoom) => {
        const minZoom = 1; // Minimum zoom level
        if (zoom < minZoom) {
          setZoomLevel(minZoom);
        } else {
          setZoomLevel(zoom);
        }
      };*/

    const renderNode = (node, ctx, globalScale) => {
        const label = node.label;
        const fontSize = 12 / globalScale; // Adjust font size based on zoom level
        ctx.font = `${fontSize}px Sans-Serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = node.color || 'rgba(255, 255, 255, 0.7)'; // Default node color
        ctx.beginPath();
        ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI, false); // Draw a circle for the node
        ctx.fill();
        ctx.fillStyle = 'black'; // Label color
        if (showLabels) {
          ctx.fillText(label, node.x, node.y + 15); // Position label below the node
        }
      };

    // Handler to toggle labels on and off
    const toggleLabels = () => {
      setShowLabels(!showLabels);
    };
      
    // Create a ref to the container div
    const graphContainer = useRef(null);


    return (
        <div className={styles.graphContainer} ref={graphContainer}>
            <Navigation />
            <button onClick={toggleLabels}>{showLabels ? 'Hide Labels' : 'Show Labels'}</button>
            <ForceGraph2D
                graphData={graphData}
                nodeLabel="name"
                nodeAutoColorBy="group"
                linkDirectionalParticles="value"
                linkDirectionalParticleWidth={link => Math.sqrt(link.value)}
                onNodeClick={handleNodeClick}
                nodeCanvasObject={renderNode}
                nodeCanvasObjectMode={() => 'before'}
            />
        </div>
    );
};

export default KnowledgeGraph;
