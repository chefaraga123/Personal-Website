import React from 'react';
import { useParams } from 'react-router-dom';

const BookSummary = ({ books }) => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-summary">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Published: {book.year}</p>
      <p>Summary: {book.summary}</p>
    </div>
  );
};

export default BookSummary;