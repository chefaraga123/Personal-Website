import React, { useState, useEffect } from 'react';
import * as runtime from 'react/jsx-runtime';
import { compile, run } from '@mdx-js/mdx';
import { MDXProvider } from '@mdx-js/react';

// Import all available interactive components
import InteractiveChart from '../InteractiveComponents/InteractiveChart';
import Callout from '../InteractiveComponents/Callout';
import Collapsible from '../InteractiveComponents/Collapsible';

// Components available in MDX files
const components = {
    InteractiveChart,
    Callout,
    Collapsible,
};

const MDXComponent = ({ filePath }) => {
    const [Content, setContent] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMDX = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch the MDX file
                const response = await fetch(filePath);
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${filePath}`);
                }
                const mdxSource = await response.text();

                // Compile MDX to JavaScript
                const compiled = await compile(mdxSource, {
                    outputFormat: 'function-body',
                    development: false,
                });

                // Run the compiled code to get the component
                const { default: MDXContent } = await run(String(compiled), {
                    ...runtime,
                    baseUrl: import.meta.url,
                });

                setContent(() => MDXContent);
            } catch (err) {
                console.error('Error loading MDX:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadMDX();
    }, [filePath]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading content: {error}</div>;
    }

    if (!Content) {
        return null;
    }

    return (
        <MDXProvider components={components}>
            <Content components={components} />
        </MDXProvider>
    );
};

export default MDXComponent;
