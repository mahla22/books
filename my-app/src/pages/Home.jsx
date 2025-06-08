import { books } from '../data/books.js';
import { genres } from '../data/genres.js';
import BookCard from '../BookCard.jsx';
import GenreCard from '../GenreCard.jsx';
import { motion} from 'framer-motion';

function Home() {
  return (
  <>
  <div style={{textAlign:"center",}}>
    <h2 style={{margin:"20px 0 20px 0"}}>جدیدترین ها</h2>
    <motion.div 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true, amount: 0.3 }}
    style={{ display: 'flex',
     flexWrap: 'wrap', 
     justifyContent: 'center' }}>
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </motion.div>
    <button>بیشتر</button>
  </div>
  <hr></hr>
  <div style={{textAlign:"center",}}>
    <h2 style={{margin:"20px 0 20px 0"}}> ژانر ها</h2>
    <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{ display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center' }}>
      {genres.map(genre => (
        <GenreCard key={genre.id} genre={genre} />
      ))}
    </motion.div>
    <button>بیشتر</button>
  </div>
 </>
  );
}

export default Home;
