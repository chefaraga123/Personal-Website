import React, { useEffect, useState, useRef } from 'react';
import styles from './Writing.module.css';
import Navigation from '../../components/Navigation/Navigation';
import MarkdownComponent from '../../components/MarkdownComponent/MarkdownComponent';
import ContentsComponent from '../../components/Contents/Contents';
import MarkdownExcerpt from '../../components/MarkdownExcerpt/MarkdownExcerpt';

const Writing = () => {
  const sections = [
    {
      id: 'section2',
      title: 'The Urbanisation of Virtual Worlds',
      date: '  | 23/01/2024',
      url: "/Urbanisation-Virtual-Worlds",
      markdownUrl: "/articles/Urbanisation_Of_Virtual_worlds.md"
    },
    {
      id: 'section1',
      title: 'The Definitive Introduction to Emergence',
      date: '  | 07/02/2024',
      url: "/Emergence",
      markdownUrl: "/articles/Emergence.md"

    },
    {
      id: 'section3',
      title: 'An introduction to ZKs',
      date: '  | 15/02/2024',
      url: "/introduction-zks",
      markdownUrl: "/articles/Introduction_Zks.md"

    },
    {
      id: 'section4',
      title: 'Applying ZK to Gaming',
      date: '  | 21/02/2024',
      url: "/introduction-zks-gaming",
      markdownUrl: "/articles/Introduction_Zks_Gaming.md"

    },
    {
      id: 'section5',
      title: 'Using Non-Custodial Accounts',
      date: '  | 21/02/2024',
      url: "/Non_Custodial_Accounts",
      markdownUrl: "/articles/Non_Custodial_Accounts.md"

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
