import { Routes, Route , useLocation} from 'react-router-dom';
import Header from './Header';
import Quotes from './Quotes';
import Home from './pages/Home';
import Books from './pages/Books';
import About from './pages/About';
import BookPage from './pages/BookPage';
import Footer from './Footer';
import './app.css'
function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <>
    
      {isHome && (
        <>
          <Header />
          <Quotes />
        </>
      )}
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/books/:id" element={<BookPage />} />
      </Routes>
        
      <Footer />
    </>
  );
}

export default App;

