import React, { useEffect, useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './Writing.module.css';
import Navigation from '../../components/Navigation/Navigation';
import MarkdownComponent from '../../components/MarkdownComponent/MarkdownComponent';

const Writing = () => {
  const markdownFiles = ["articles/Urbanisation_Of_Virtual_worlds.md", "articles/test2.md"]

    return (
        <div className={styles.writingContainer}>
            <Navigation />
            <h1>My Writings</h1>
            <p>I like writing about history, philosophy, economics, gaming, politics, systems theory and more</p>
            {markdownFiles.map((filePath, index) => (
              <div key={index}>
                {index !== markdownFiles.length - 1 && <hr />} 
                <MarkdownComponent filePath={filePath} />

              </div>
             ))}

            <div>
          </div>

        </div>
    );
};

export default Writing;
