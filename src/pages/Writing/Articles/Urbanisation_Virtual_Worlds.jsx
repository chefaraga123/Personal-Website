import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';

const Urbanisation = () => {
    return (
        <div>
            <Navigation />
            <MarkdownComponent filePath={"/Personal-Website/articles/Urbanisation_Of_Virtual_worlds.md"} />
        </div>
    );

};

export default Urbanisation;
