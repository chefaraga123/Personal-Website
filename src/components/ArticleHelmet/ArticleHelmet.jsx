import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * A reusable component for adding SEO metadata to article pages
 * 
 * @param {Object} props
 * @param {string} props.title - The article title
 * @param {string} props.description - Meta description for the article
 * @param {string} props.keywords - Comma-separated keywords
 * @param {string} props.publishedDate - ISO date string (YYYY-MM-DD)
 * @param {string} props.category - Article category
 * @param {string} props.imageUrl - Optional OG image URL
 */
const ArticleHelmet = ({ 
    title, 
    description, 
    keywords, 
    publishedDate, 
    category,
    imageUrl
}) => {
    const fullTitle = `${title} | James' Personal Website`;
    
    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            
            {/* Open Graph / Social Media */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : 'https://yourwebsite.com'} />
            {imageUrl && <meta property="og:image" content={imageUrl} />}
            
            {/* Article specific */}
            <meta property="article:published_time" content={publishedDate} />
            <meta property="article:section" content={category} />
            
            {/* Canonical URL */}
            <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://yourwebsite.com'} />
        </Helmet>
    );
};

export default ArticleHelmet;
