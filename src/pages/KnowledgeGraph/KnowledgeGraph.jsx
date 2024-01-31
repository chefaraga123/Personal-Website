import React, { useEffect, useState, useRef } from 'react';
import { ForceGraph2D } from 'react-force-graph';
import styles from './KnowledgeGraph.module.css';
import Navigation from '../../components/Navigation/Navigation';

const KnowledgeGraph = () => {
    const [graphData, setGraphData] = useState({ nodes: [], links: [] });

    useEffect(() => {
      // Fetch the graph data from the 'public' directory
      fetch('/graph-data.json')
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
  
    
    // Create a ref to the container div
    const graphContainer = useRef(null);


    return (
        <div className={styles.graphContainer} ref={graphContainer}>
            <Navigation />

            <ForceGraph2D
                graphData={graphData}
                nodeLabel="name"
                nodeAutoColorBy="group"
                linkDirectionalParticles="value"
                linkDirectionalParticleWidth={link => Math.sqrt(link.value)}
            />

        </div>
    );
};

export default KnowledgeGraph;
