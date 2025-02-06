import React from 'react';
import styles from './Contents.module.css'

const ContentsComponent = ({ sections, filter }) => {
  // Filter sections based on the selected category
  const filteredSections = filter === 'all' 
    ? sections 
    : sections.filter(section => section.category === filter);

  const navigateToArticle = (url) => {
    // Navigate to the article URL
    window.location.href = url;
  };

  return (
    <div className={styles.contents}>
      <h2>Most recent articles at the top</h2>
      {filteredSections.map((section) => (
        <a key={section.id} href={section.url} className={styles.panel}>
          <h3>{section.title}</h3>
          <p>{section.date}</p>
        </a>
      ))}
    </div>
  );
};

export default ContentsComponent;
