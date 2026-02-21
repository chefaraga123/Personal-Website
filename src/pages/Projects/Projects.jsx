import React, { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import styles from './Projects.module.css';

const nodes = [
    {
        id: 'gitplan',
        title: 'GitPlan',
        role: 'Design Layer',
        description: 'Plans and documents the system — version-controlling design decisions, feature specs, and architecture across all apps.',
        url: 'https://design.jamesoleary.xyz',
        cx: 50, cy: 14,
    },
    {
        id: 'lifeflow',
        title: 'LifeFlow',
        role: 'Planning Layer',
        description: 'Breaks down goals into structured, actionable steps — determines what to track and what to learn.',
        url: 'https://flowcharts.jamesoleary.xyz',
        cx: 22, cy: 50,
    },
    {
        id: 'languages',
        title: 'Languages',
        role: 'Learning Layer',
        description: 'Tracks German and Danish language learning — flashcard progress, timelines, and study strategies. Study habits feed into Tracker.',
        url: 'https://languages.jamesoleary.xyz',
        cx: 78, cy: 50,
    },
    {
        id: 'tracker',
        title: 'Tracker',
        role: 'Data Layer',
        description: 'The data foundation — captures daily habits, wakeup times, and gym attendance. All other apps will eventually surface data here.',
        url: 'https://tracker.jamesoleary.xyz',
        cx: 50, cy: 86,
    },
];

const connections = [
    { from: 'gitplan', to: 'lifeflow' },
    { from: 'gitplan', to: 'languages' },
    { from: 'lifeflow', to: 'tracker' },
    { from: 'languages', to: 'tracker' },
    { from: 'lifeflow', to: 'languages' },
];

const Projects = () => {
    const [hoveredId, setHoveredId] = useState(null);

    const getConnectedIds = (id) => {
        if (!id) return new Set();
        const connected = new Set();
        connections.forEach(({ from, to }) => {
            if (from === id) connected.add(to);
            if (to === id) connected.add(from);
        });
        return connected;
    };

    const connectedIds = getConnectedIds(hoveredId);
    const hoveredNode = nodes.find(n => n.id === hoveredId);
    const getNodeById = (id) => nodes.find(n => n.id === id);

    return (
        <div className={styles.container}>
            <Navigation />
            <h1 className={styles.heading}>Projects</h1>
            <p className={styles.subheading}>A system of mini-apps designed to work together.</p>

            <div className={styles.diagramWrapper}>
                <div className={styles.diagram}>
                    <svg
                        className={styles.diagramSvg}
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        {connections.map((conn, i) => {
                            const from = getNodeById(conn.from);
                            const to = getNodeById(conn.to);
                            const isHighlighted = hoveredId && (conn.from === hoveredId || conn.to === hoveredId);
                            const isDimmed = hoveredId && !isHighlighted;
                            return (
                                <line
                                    key={i}
                                    x1={from.cx} y1={from.cy}
                                    x2={to.cx} y2={to.cy}
                                    className={`${styles.line} ${isHighlighted ? styles.lineHighlighted : ''} ${isDimmed ? styles.lineDimmed : ''}`}
                                    vectorEffect="non-scaling-stroke"
                                />
                            );
                        })}
                    </svg>

                    {nodes.map((node) => {
                        const isHovered = hoveredId === node.id;
                        const isConnected = connectedIds.has(node.id);
                        const isDimmed = hoveredId && !isHovered && !isConnected;
                        return (
                            <a
                                key={node.id}
                                href={node.url}
                                className={`${styles.node} ${isHovered ? styles.nodeHovered : ''} ${isDimmed ? styles.nodeDimmed : ''}`}
                                style={{ left: `${node.cx}%`, top: `${node.cy}%` }}
                                onMouseEnter={() => setHoveredId(node.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className={styles.nodeRole}>{node.role}</div>
                                <div className={styles.nodeTitle}>{node.title}</div>
                            </a>
                        );
                    })}
                </div>
            </div>

            <div className={styles.infoPanel}>
                {hoveredNode ? (
                    <>
                        <span className={styles.infoPanelTitle}>{hoveredNode.title} — </span>
                        <span className={styles.infoPanelDescription}>{hoveredNode.description}</span>
                    </>
                ) : (
                    <span className={styles.infoPanelHint}>Hover an app to learn more</span>
                )}
            </div>
        </div>
    );
};

export default Projects;
