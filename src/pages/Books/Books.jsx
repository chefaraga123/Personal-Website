import React, { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import BookData from './BookData.json'; // Import your JSON data
import { Link, Link as RouterLink } from 'react-router-dom';
import styles from './Books.module.css'; // Import your CSS module
import ReactMarkdown from 'react-markdown'; // Import the library

const Books = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [toReadBooks, setToReadBooks] = useState([]); // New state for To Read books
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [showReadBooks, setShowReadBooks] = useState(true); // New state for toggling visibility
    const [showWithSummary, setShowWithSummary] = useState(true); // New state for filtering books with summaries

    useEffect(() => {
        // Set the fetched data to state
        setBooks(BookData);
        setFilteredBooks(BookData); // Initialize filtered books with all books
    }, []);

    // Function to handle genre selection
    const handleGenreSelect = (genre) => {
        if (selectedGenres.includes(genre)) {
            // If the genre is already selected, remove it
            setSelectedGenres(selectedGenres.filter((g) => g !== genre));
        } else {
            // If the genre is not selected, add it
            setSelectedGenres([...selectedGenres, genre]);
        }
    };

    // Function to filter books based on selected genres
    useEffect(() => {
        if (selectedGenres.length === 0) {
            // If no genres are selected, show all books
            setFilteredBooks(books);
        } else {
            // Filter books based on selected genres
            const filtered = books.filter((book) =>
                selectedGenres.every((genre) => book.genre.includes(genre))
            );
            setFilteredBooks(filtered);
        }
    }, [selectedGenres, books]);

    // Function to toggle the visibility of the read books
    const toggleReadBooks = () => {
        setShowReadBooks(!showReadBooks);
    };

    // Function to handle the summary filter
    const handleSummaryFilter = () => {
        setShowWithSummary(!showWithSummary);
    };

    const renderSummary = (summary) => {
        // Replace note links with actual links to the public notes
        const regex = /\[(.*?)\]\((notes\/.*?\.md)\)/g; // Regex to match [text](notes/filename.md)
        const parts = summary.split(regex);
        return parts.map((part, index) => {
            if (index % 3 === 1) {
                // This is the link text
                const linkText = part;
                const linkUrl = `../${parts[index + 1]}`; // Move up one directory and then to notes
                return (
                    <a key={index} href={linkUrl} target="_blank" rel="noopener noreferrer">
                        {linkText}
                    </a>
                );
            }
            return part; // Return the text as is
        });
    };

    return (
        <div>
            <Navigation />
            <h2>Books I think are interesting enough to put on a list</h2>
            <p>I am still working on this list and the inclusion of various book summaries</p>
            <div>
                <h2>Filter by Genre:</h2>
                <ul className={styles.genreList}>
                    {["Biography", "History", "Politics", 
                    "Warfare", "Technology", "Philosophy", 
                    "Economics", "Management", "Mathematics", 
                    "Engineering", "Sociology", "Fiction"].map((genre) => (
                        <li key={genre}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={genre}
                                    checked={selectedGenres.includes(genre)}
                                    onChange={() => handleGenreSelect(genre)}
                                />
                                {genre}
                            </label>
                        </li>
                    ))}
                </ul>
                <label>
                    <input
                        type="checkbox"
                        checked={showWithSummary}
                        onChange={handleSummaryFilter}
                    />
                    Show only books with summaries
                </label>
            </div>
            <h2 onClick={toggleReadBooks} style={{ cursor: 'pointer' }}>
                Books I've Read {showReadBooks ? '▲' : '▼'}
            </h2>
            {showReadBooks && ( // Conditionally render the bookshelf
                <div className={styles.bookshelf}>
                    {filteredBooks
                        .filter(book => !showWithSummary || book.summaryLink) // Filter based on summary
                        .map((book, index) => (
                            <div key={index} className={styles.bookItem}>
                                <Link to={book.summaryLink}>
                                    <img src={book.image} alt={book.title} className={styles.bookImage} />
                                    <div className={styles.bookInfo}>
                                        <strong>Title:</strong> {book.title} <br />
                                        <strong>Author:</strong> {book.author} <br />
                                        <strong>Genres:</strong> {book.genre.join(', ')} <br />
                                        {book.summaryLink && <span className={styles.summaryFlag}>📖</span>} {/* Flag for summary */}
                                    </div>
                                </Link>
                                {book.summary && ( // Render the summary if it exists
                                    <div className={styles.summary}>
                                        {renderSummary(book.summary)} {/* Render Markdown summary with links */}
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
            )}
            <h2>Books I'm planning to read</h2>

            <div className={styles.bookshelf}>
                {toReadBooks.map((book, index) => (
                    <div key={index} className={styles.bookItem}>
                        <Link to={book.summaryLink}>
                            <img src={book.image} alt={book.title} className={styles.bookImage} />
                            <div className={styles.bookInfo}>
                                <strong>Title:</strong> {book.title} <br />
                                <strong>Author:</strong> {book.author} <br />
                                <strong>Genres:</strong> {book.genre.join(', ')} <br />
                                {book.summaryLink && <span className={styles.summaryFlag}>📖</span>} {/* Flag for summary */}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Books;
