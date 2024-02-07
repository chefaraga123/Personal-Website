import React from 'react';
import styles from './Contents.module.css'

const ContentsComponent = ({ sections }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.contents}>
      <h2>Contents</h2>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} onClick={() => scrollToSection(section.id)}>
              {section.title}
              {section.date}

            </a>
            {section.subsections && (
              <ul>
                {section.subsections.map((subsection) => (
                  <li key={subsection.id}>
                    <a href={`#${subsection.id}`} onClick={() => scrollToSection(subsection.id)}>
                      {subsection.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentsComponent;
