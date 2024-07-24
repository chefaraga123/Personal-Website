import React, { useEffect, useState, useRef } from 'react';
import styles from './Writing.module.css';
import Navigation from '../../components/Navigation/Navigation';
import MarkdownComponent from '../../components/MarkdownComponent/MarkdownComponent';
import ContentsComponent from '../../components/Contents/Contents';
import MarkdownExcerpt from '../../components/MarkdownExcerpt/MarkdownExcerpt';
import sections from './sections.json'; // Adjust the path if the JSON file is in a different location

const Writing = () => {

    return (
        <div className={styles.writingContainer}>
            <Navigation />
            <h1>My Writings</h1>
            <ContentsComponent sections={sections} />

            {sections.map(section => (
              <MarkdownExcerpt key={section.id} actualurl={section.url} url={section.markdownUrl}/>
            ))}

            <div>
          </div>

        </div>
    );
};

export default Writing;
