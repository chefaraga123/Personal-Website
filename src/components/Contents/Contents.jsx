import React from 'react';
import styles from './Contents.module.css'

const ContentsComponent = ({ sections, filter }) => {
  const filteredSections = filter === 'all'
    ? sections
    : sections.filter(section => section.category === filter);

  return (
    <div className={styles.contents}>
      {filteredSections.map((section) => (
        <a key={section.id} href={section.url} className={styles.panel}>
          <span className={styles.title}>{section.title}</span>
          <span className={styles.date}>{section.date}</span>
        </a>
      ))}
    </div>
  );
};

export default ContentsComponent;
