import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css'
function BookCard({ book }) {
  return (
  <Link to={`/books/${book.id}`} className="book-card-link">
    <div className="book-card" style={styles.card}>
      <img src={book.image} alt={book.title} style={styles.image} />
      <div style={styles.content}>
        <h3 style={styles.title}>{book.title}</h3>
        <p style={styles.author}>نویسنده: {book.author}</p>
        <p style={styles.year}>سال انتشار: {book.year}</p>
        <p style={styles.desc}>{book.description}</p>
      </div>
    </div>
  </Link>
  );
}

const styles = {
  card: {
    width: '250px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    direction: 'rtl',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    margin: '10px',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '320px',
    objectFit: 'cover',
  },
  content: {
    padding: '10px',
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  author: {
    fontSize: '0.9rem',
    color: '#333',
    margin: '4px 0',
  },
  year: {
    fontSize: '0.85rem',
    color: '#666',
  },
  desc: {
    fontSize: '0.85rem',
    marginTop: '10px',
    color: '#555',
  }
};

export default BookCard;
