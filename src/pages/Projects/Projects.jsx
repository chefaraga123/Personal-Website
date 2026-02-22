import React, { useState, useRef, useLayoutEffect } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import styles from './Projects.module.css';

const NODE_W = 140;
const NODE_H = 60;

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
    { from: 'gitplan',   to: 'lifeflow'  },
    { from: 'gitplan',   to: 'languages' },
    { from: 'lifeflow',  to: 'tracker'   },
    { from: 'languages', to: 'tracker'   },
    { from: 'lifeflow',  to: 'languages' },
];

const getEdgePoints = (fromNode, toNode, dims) => {
    const hw = NODE_W / 2;
    const hh = NODE_H / 2;
    const fx = fromNode.cx / 100 * dims.width;
    const fy = fromNode.cy / 100 * dims.height;
    const tx = toNode.cx / 100 * dims.width;
    const ty = toNode.cy / 100 * dims.height;
    const dx = tx - fx, dy = ty - fy;
    const len = Math.sqrt(dx * dx + dy * dy);
    if (len === 0) return { x1: fx, y1: fy, x2: tx, y2: ty };
    const nx = dx / len, ny = dy / len;
    const d = nx === 0 ? hh / Math.abs(ny)
            : ny === 0 ? hw / Math.abs(nx)
            : Math.min(hw / Math.abs(nx), hh / Math.abs(ny));
    return { x1: fx + nx * d, y1: fy + ny * d, x2: tx - nx * d, y2: ty - ny * d };
};

const Projects = () => {
    const [hoveredId, setHoveredId] = useState(null);
    const diagramRef = useRef(null);
    const [dims, setDims] = useState({ width: 560, height: 420 });

    useLayoutEffect(() => {
        if (!diagramRef.current) return;
        const ro = new ResizeObserver(entries => {
            const { width, height } = entries[0].contentRect;
            setDims({ width, height });
        });
        ro.observe(diagramRef.current);
        return () => ro.disconnect();
    }, []);

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
                <div className={styles.diagram} ref={diagramRef}>
                    <svg
                        className={styles.diagramSvg}
                        viewBox={`0 0 ${dims.width} ${dims.height}`}
                        aria-hidden="true"
                    >
                        <defs>
                            <marker id="arrow-default" markerWidth="10" markerHeight="8" refX="10" refY="4" orient="auto" markerUnits="userSpaceOnUse">
                                <path d="M0,1 L10,4 L0,7 Z" fill="#ccc" />
                            </marker>
                            <marker id="arrow-highlighted" markerWidth="10" markerHeight="8" refX="10" refY="4" orient="auto" markerUnits="userSpaceOnUse">
                                <path d="M0,1 L10,4 L0,7 Z" fill="#333" />
                            </marker>
                        </defs>

                        {connections.map((conn, i) => {
                            const from = getNodeById(conn.from);
                            const to = getNodeById(conn.to);
                            const isHighlighted = hoveredId && (conn.from === hoveredId || conn.to === hoveredId);
                            const isDimmed = hoveredId && !isHighlighted;
                            const { x1, y1, x2, y2 } = getEdgePoints(from, to, dims);
                            return (
                                <line
                                    key={i}
                                    x1={x1} y1={y1}
                                    x2={x2} y2={y2}
                                    className={`${styles.line} ${isHighlighted ? styles.lineHighlighted : ''} ${isDimmed ? styles.lineDimmed : ''}`}
                                    markerEnd={isHighlighted ? 'url(#arrow-highlighted)' : 'url(#arrow-default)'}
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

            <div className={styles.legend}>
                <span className={styles.legendLine} />
                <span className={styles.legendLabel}>planned integration</span>
            </div>
        </div>
    );
};

export default Projects;
