import React, { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import BookData from './BookData.json'; // Import your JSON data
import { Link } from 'react-router-dom';  // Assuming you're using React Router

const Books = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);

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

    return (
        <div>
            <Navigation />
            <h1>Books I've Read</h1>
            <div>
                <h2>Filter by Genre:</h2>
                <ul>
                    {["Biography", "History", "Politics", 
                    "Warfare", "Technology", "Philosophy", 
                    "Economics", "Management", "Mathematics", 
                    "Engineering", "Sociology"].map((genre) => (
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
            </div>
            <ul>
                {filteredBooks.map((book, index) => (
                    <li key={index}>
                        <Link to={book.summaryLink}>
                            <strong>Title:</strong> {book.title} <br />
                            <strong>Author:</strong> {book.author} <br />
                            <strong>Genres:</strong> {book.genre.join(', ')} <br />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Books;
