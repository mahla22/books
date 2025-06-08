import React from 'react';

function GenreCard({ genre }) {
  return (
    <div style={styles.card}>
      <img src={genre.image} alt={genre.name} style={styles.image} />
      <h4 style={styles.name}>{genre.genre}</h4>
      <a href="#" style={styles.a}>کتاب های این ژانر</a>
    </div>
  );
}

const styles = {
  card: {
    width: '250px',
    height:"350px",
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    direction: 'rtl',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    margin: '10px',
    backgroundColor: '#fff',
  },
  a : {
    textDecoration: 'none',
  
  },
  name : {
    marginBottom:'30px'
  },
  image: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '6px',
  },
}

export default GenreCard;
