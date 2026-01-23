import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import WorldMap from '../../components/WorldMap/WorldMap';
import styles from './WorldMapPage.module.css';

const WorldMapPage = () => {
    return (
        <div className={styles.container}>
            <Navigation />
            <WorldMap />
        </div>
    );
};

export default WorldMapPage;
