import React, { useEffect, useState, useRef } from 'react';
import styles from './Writing.module.css';
import Navigation from '../../components/Navigation/Navigation';
import MarkdownComponent from '../../components/MarkdownComponent/MarkdownComponent';
import ContentsComponent from '../../components/Contents/Contents';

const Writing = () => {
  const markdownFiles = [
    "articles/Urbanisation_Of_Virtual_worlds.md",
    "articles/Emergence.md",
    "articles/Introduction_Zks_Gaming.md"]

  const sections = [
    {
      id: 'section1',
      title: 'The Urbanisation of Virtual Worlds',
      date: '  | 23/01/2024'
    },
    {
      id: 'section2',
      title: 'The Guide to Understanding Emergence',
      date: '  | 07/02/2024'

    },
    {
      id: 'section3',
      title: 'An Introduction to Zks in Gaming'
    },
    {
      id: 'section4',
      title: 'An Introduction to Building an On-chain game'
    }
  ];//Should put this somewhere else as a JSON?

    return (
        <div className={styles.writingContainer}>
            <Navigation />
            <h1>My Writings</h1>
            <ContentsComponent sections={sections} />
            {markdownFiles.map((filePath, index) => (
              <div key={index}>
                {index !== markdownFiles.length - 1 && <hr />} 
                <MarkdownComponent filePath={filePath} />
                {index !== markdownFiles.length - 1 && <hr />} 

              </div>
             ))}

            <div>
          </div>

        </div>
    );
};

export default Writing;
