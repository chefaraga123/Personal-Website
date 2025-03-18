import React, { useEffect } from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';
import styles from './ArticleStyling.module.css';
import * as d3 from 'd3';
import MathJax from 'react-mathjax';

const NeuralNetworkVisualization = () => {
    useEffect(() => {
        const width = 600;
        const height = 400;
        const svgContainer = d3.select('#neural-network');
        svgContainer.selectAll('*').remove(); // Clear existing SVG elements

        const svg = svgContainer.append('svg')
            .attr('width', width)
            .attr('height', height);

        const layer1 = [1, 2, 3]; // Input layer
        const layer2 = [4, 5]; // Output layer

        const nodeRadius = 20;
        const layer1X = width / 4;
        const layer2X = (3 * width) / 4;

        // Draw input layer nodes
        layer1.forEach((d, i) => {
            const inputNode = svg.append('circle')
                .attr('cx', layer1X)
                .attr('cy', (i + 1) * (height / (layer1.length + 1)))
                .attr('r', nodeRadius)
                .attr('fill', 'lightblue')
                .on('mouseover', function() {
                    d3.select(this).attr('fill', 'blue'); // Change color on hover
                })
                .on('mouseout', function() {
                    d3.select(this).attr('fill', 'lightblue'); // Revert color on mouse out
                });

            svg.append('text')
                .attr('x', layer1X)
                .attr('y', (i + 1) * (height / (layer1.length + 1)))
                .attr('dy', '.35em')
                .attr('text-anchor', 'middle')
                .text(`Input ${d}`);
        });

        // Draw output layer nodes
        layer2.forEach((d, i) => {
            svg.append('circle')
                .attr('cx', layer2X)
                .attr('cy', (i + 1) * (height / (layer2.length + 1)))
                .attr('r', nodeRadius)
                .attr('fill', 'lightgreen');

            svg.append('text')
                .attr('x', layer2X)
                .attr('y', (i + 1) * (height / (layer2.length + 1)))
                .attr('dy', '.35em')
                .attr('text-anchor', 'middle')
                .text(`Output ${d}`);
        });

        // Draw connections and represent weights
        layer1.forEach((_, i) => {
            layer2.forEach((_, j) => {
                const weight = Math.random().toFixed(2); // Example weight value
                svg.append('line')
                    .attr('x1', layer1X)
                    .attr('y1', (i + 1) * (height / (layer1.length + 1)))
                    .attr('x2', layer2X)
                    .attr('y2', (j + 1) * (height / (layer2.length + 1)))
                    .attr('stroke', 'black')
                    .attr('stroke-width', 2);

                // Add weight label
                svg.append('text')
                    .attr('x', (layer1X + layer2X) / 2)
                    .attr('y', (i + 1) * (height / (layer1.length + 1) + (j + 1) * (height / (layer2.length + 1))) / 2)
                    .attr('dy', '-0.5em')
                    .attr('text-anchor', 'middle')
                    .text(`w: ${weight}`); // Display weight
            });
        });
    }, []);

    return (
            <div id="neural-network"></div>
    );
};

const AI_Thinks_Like_The_Market = () => {
    return (
        <div>
            <Navigation />
            <div className={styles.markdownContainer}>
                <MarkdownComponent filePath={"/articles/AI_Thinks_Like_The_Market.md"} />
                <NeuralNetworkVisualization />
            </div>
        </div>
    );
};

export default AI_Thinks_Like_The_Market;
