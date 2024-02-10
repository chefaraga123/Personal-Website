import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';

const Emergence = () => {
    return (
        <div>
            <Navigation />
            <MarkdownComponent filePath={"/Personal-Website/articles/Emergence.md"} />
        </div>
    );

};

export default Emergence;
