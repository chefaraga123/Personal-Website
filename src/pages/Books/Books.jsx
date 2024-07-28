import React, { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import BookData from './BookData.json'; // Import your JSON data
import './Checkbox.module.css'; // Import CSS file
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
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                value="Biography"
                                checked={selectedGenres.includes('Biography')}
                                onChange={() => handleGenreSelect('Biography')}                                                         
                            />
                            Biography
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                value="History"
                                checked={selectedGenres.includes('History')}
                                onChange={() => handleGenreSelect('History')}
                            />
                            History
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                value="Politics"
                                checked={selectedGenres.includes('Politics')}
                                onChange={() => handleGenreSelect('Politics')}
                            />
                            Politics
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                value="Warfare"
                                checked={selectedGenres.includes('Warfare')}
                                onChange={() => handleGenreSelect('Warfare')}
                            />
                            Warfare
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                value="Technology"
                                checked={selectedGenres.includes('Technology')}
                                onChange={() => handleGenreSelect('Technology')}
                            />
                            Technology
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                value="Philosophy"
                                checked={selectedGenres.includes('Philosophy')}
                                onChange={() => handleGenreSelect('Philosophy')}
                            />
                            Philosophy
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                value="Economics"
                                checked={selectedGenres.includes('Economics')}
                                onChange={() => handleGenreSelect('Economics')}
                            />
                            Economics
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                value="Management"
                                checked={selectedGenres.includes('Management')}
                                onChange={() => handleGenreSelect('Management')}
                            />
                            Management
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                value="Mathematics"
                                checked={selectedGenres.includes('Mathematics')}
                                onChange={() => handleGenreSelect('Mathematics')}
                            />
                            Mathematics
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                value="Engineering"
                                checked={selectedGenres.includes('Engineering')}
                                onChange={() => handleGenreSelect('Engineering')}
                            />
                            Engineering
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                value="Sociology"
                                checked={selectedGenres.includes('Sociology')}
                                onChange={() => handleGenreSelect('Sociology')}
                            />
                            Sociology
                        </label>
                    </li>
                    {/* Add more genre checkboxes as needed */}
                </ul>
            </div>
            <ul>
                {filteredBooks.map((book, index) => (
                    <li key={index}>
                        <Link to={book.summaryLink}>
                        <strong>Title:</strong> {book.title} <br />
                        <strong>Author:</strong> {book.author} <br />
                        <strong>Genres:</strong> {book.genre.join(', ')} <br />
                        {book.additionalInfo && (
                            <div>
                                <strong>Additional Info:</strong> {book.additionalInfo}
                            </div>
                        )}
                        </Link>
                        <br />
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Books;
