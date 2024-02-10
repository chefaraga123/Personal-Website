import React, { useEffect, useState, useRef } from 'react';
import styles from './Writing.module.css';
import Navigation from '../../components/Navigation/Navigation';
import MarkdownComponent from '../../components/MarkdownComponent/MarkdownComponent';
import ContentsComponent from '../../components/Contents/Contents';
import MarkdownExcerpt from '../../components/MarkdownExcerpt/MarkdownExcerpt';

const Writing = () => {
  const sections = [
    {
      id: 'section1',
      title: 'The Definitive Introduction to Emergence',
      date: '  | 07/02/2024',
      url: "/personal-website/writing/Emergence",
      markdownUrl: "/personal-website/articles/Emergence.md"

    },
    {
      id: 'section2',
      title: 'The Urbanisation of Virtual Worlds',
      date: '  | 23/01/2024',
      url: "/personal-website/writing/Urbanisation-Virtual-Worlds",
      markdownUrl: "/personal-website/articles/Urbanisation_Of_Virtual_worlds.md"
    },
    {
      id: 'section3',
      title: 'An Application of Zks in Gaming',
      date: '  | 14/02/2024',
      url: "/articles/Introduction_Zks_Gaming.md"
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

            {sections.map(section => (
              <MarkdownExcerpt key={section.id} actualurl={section.url} url={section.markdownUrl}/>
            ))}

            <div>
          </div>

        </div>
    );
};

export default Writing;
