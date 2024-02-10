import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';

const Emergence = () => {
    return (
        <div>
            <Navigation />
            <MarkdownComponent filePath={"/personal-website/articles/Emergence.md"} />
        </div>
    );

};

export default Emergence;
