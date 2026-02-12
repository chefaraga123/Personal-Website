import React, { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import BookData from './BookData.json'; // Import your JSON data
import { Link, Link as RouterLink } from 'react-router-dom';
import styles from './Books.module.css'; // Import your CSS module
import ReactMarkdown from 'react-markdown'; // Import the library

const Books = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [showWithSummary, setShowWithSummary] = useState(false); // New state for filtering books with summaries
    const [bookOfTheDay, setBookOfTheDay] = useState(null);

    // Function to get a deterministic "random" book based on the current date
    const getBookOfTheDay = (booksWithSummaries) => {
        if (booksWithSummaries.length === 0) return null;

        const today = new Date();
        const dateString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

        // Simple hash function to convert date string to a number
        let hash = 0;
        for (let i = 0; i < dateString.length; i++) {
            hash = ((hash << 5) - hash) + dateString.charCodeAt(i);
            hash = hash & hash; // Convert to 32-bit integer
        }

        const index = Math.abs(hash) % booksWithSummaries.length;
        return booksWithSummaries[index];
    };

    useEffect(() => {
        // Set the fetched data to state
        setBooks(BookData);
        setFilteredBooks(BookData); // Initialize filtered books with all books

        // Set book of the day from books with summaries
        const booksWithSummaries = BookData.filter(book => book.summaryLink);
        setBookOfTheDay(getBookOfTheDay(booksWithSummaries));
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
        <div className={styles.booksContainer}>
            <Navigation />
            {bookOfTheDay && (
                <div className={styles.bookOfTheDay}>
                    <h2>Book of the Day</h2>
                    <div className={styles.bookOfTheDayContent}>
                        <Link to={bookOfTheDay.summaryLink} className={styles.bookOfTheDayLink}>
                            <img
                                src={bookOfTheDay.image}
                                alt={bookOfTheDay.title}
                                className={styles.bookOfTheDayImage}
                            />
                            <div className={styles.bookOfTheDayInfo}>
                                <h3>{bookOfTheDay.title}</h3>
                                <p className={styles.bookOfTheDayAuthor}>by {bookOfTheDay.author}</p>
                                <p className={styles.bookOfTheDayGenres}>{bookOfTheDay.genre.join(', ')}</p>
                                <span className={styles.readReviewLink}>Read Review →</span>
                            </div>
                        </Link>
                    </div>
                </div>
            )}

            <div className={styles.filterPills}>
                {["Biography", "History", "Politics",
                "Warfare", "Technology", "Philosophy",
                "Economics", "Management", "Mathematics",
                "Engineering", "Sociology", "Fiction"].map((genre) => (
                    <button
                        key={genre}
                        className={`${styles.pill} ${selectedGenres.includes(genre) ? styles.pillActive : ''}`}
                        onClick={() => handleGenreSelect(genre)}
                    >
                        {genre}
                    </button>
                ))}
                <button
                    className={`${styles.pill} ${showWithSummary ? styles.pillActive : ''}`}
                    onClick={handleSummaryFilter}
                >
                    Has summary
                </button>
            </div>
            <div className={styles.bookshelf}>
                {filteredBooks
                    .filter(book => !showWithSummary || book.summaryLink)
                    .map((book, index) => (
                        <div key={index} className={styles.bookItem}>
                            <Link to={book.summaryLink}>
                                <img src={book.image} alt={book.title} className={styles.bookImage} />
                                <div className={styles.bookInfo}>
                                    <strong>Title:</strong> {book.title} <br />
                                    <strong>Author:</strong> {book.author} <br />
                                    <strong>Genres:</strong> {book.genre.join(', ')} <br />
                                    {book.summaryLink && <span className={styles.summaryFlag}>📖</span>}
                                </div>
                            </Link>
                            {book.summary && (
                                <div className={styles.summary}>
                                    {renderSummary(book.summary)}
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Books;
