# ArticleHelmet Component

This component was created to improve SEO for the writing pages by adding appropriate metadata using React Helmet.

## Usage

The ArticleHelmet component provides a standardized way to add SEO metadata to article pages. It should be included at the top of each article component.

### Example

```jsx
import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import MarkdownComponent from '../../../components/MarkdownComponent/MarkdownComponent';
import ArticleHelmet from '../../../components/ArticleHelmet/ArticleHelmet';
import styles from './ArticleStyling.module.css';

const MyArticle = () => {
    return (
        <div>
            <ArticleHelmet 
                title="Your Article Title"
                description="A brief, compelling description of your article (150-160 characters recommended)."
                keywords="keyword1, keyword2, keyword3, keyword4"
                publishedDate="YYYY-MM-DD"
                category="Category Name"
                imageUrl="optional/path/to/image.jpg" // Optional
            />
            <Navigation />
            <div className={styles.markdownContainer}>
                <MarkdownComponent filePath={"/articles/Your_Article_Filename.md"} />
            </div>
        </div>
    );
};

export default MyArticle;
```

## Props

| Prop | Type | Description | Required |
|------|------|-------------|----------|
| title | string | The article title (without site name) | Yes |
| description | string | Meta description for SEO (150-160 characters recommended) | Yes |
| keywords | string | Comma-separated keywords | Yes |
| publishedDate | string | ISO date format (YYYY-MM-DD) | Yes |
| category | string | Article category | Yes |
| imageUrl | string | URL to image for social sharing | No |

## SEO Best Practices

1. **Title**: Keep titles under 60 characters to ensure they display properly in search results
2. **Description**: Write compelling descriptions between 150-160 characters
3. **Keywords**: Include 5-8 relevant keywords, separated by commas
4. **Images**: When providing an imageUrl, use images with 1200×630 pixels for optimal social sharing

## Implementation Notes

- The component automatically adds the site name to the title
- It generates Open Graph tags for social media sharing
- It sets the canonical URL to the current page URL (with a fallback for server-side rendering)
- It adds article-specific metadata like published date and category
