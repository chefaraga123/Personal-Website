import React from 'react';
import styles from './Contents.module.css'

const ContentsComponent = ({ sections }) => {
  const navigateToArticle = (url) => {
    // Navigate to the article URL
    window.location.href = url;
  };

  return (
    <div className={styles.contents}>
      <h2>Contents</h2>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a href="#" onClick={() => navigateToArticle(section.url)}>
              {section.title} - {section.date}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentsComponent;
