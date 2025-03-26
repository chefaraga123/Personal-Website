import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { TwitterShareButton, TwitterIcon } from 'react-share';
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
    const shareUrl = window.location.href; // Current article URL
    const title = "AI Thinks Like The Market"; // Article title
    const imageUrl = "https://imagedelivery.net/y6Evsm-yLt-GaRery1Q3XA/254e1965-e436-4b82-6238-077f75d18d00/public"; // Assuming the image is in the public/images folder

    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content="Description of the article." />
                <meta property="og:title" content={title} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:url" content={shareUrl} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content="Description of the article." />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:url" content={shareUrl} />
            </Helmet>

            <Navigation />
            <div className={styles.markdownContainer}>
                <MarkdownComponent filePath={"/articles/AI_Thinks_Like_The_Market.md"} />
                <NeuralNetworkVisualization />
                
                {/* Twitter Sharing Section */}
                <div>
                    <h3>Share this article:</h3>
                    <TwitterShareButton
                        url={shareUrl}
                        title={title}
                        image={imageUrl}
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                </div>
            </div>
        </div>
    );
};

export default AI_Thinks_Like_The_Market;
