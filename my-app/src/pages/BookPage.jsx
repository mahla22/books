import { useParams } from 'react-router-dom';
import { books } from '../data/books';
import './BookPage.css';

export default function BookPage() {
  const { id } = useParams();
  const book = books.find((b) => b.id === Number(id));

  if (!book) return <div>کتاب مورد نظر یافت نشد.</div>;

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p><strong>نویسنده:</strong> {book.author}</p>
      <p><strong>سال انتشار:</strong> {book.year}</p>
      <img src={book.image} alt={book.title} className="book-cover" />
      <p><strong>توضیح:</strong> {book.description}</p>
      <br></br>
      <hr />
      <p><strong>قسمتی از متن کتاب :</strong></p>
      <p className="book-text">{book.text}</p>
      <button>دانلود pdf</button>
    </div>
  );
}
