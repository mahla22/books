import banner from './assets/banner.webp';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false);

  const styles = {
    backgroundImage: `url(${banner})`,
    height: '350px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <header style={styles}>
      

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <nav className={open ? 'nav open' : 'nav'}>
        <ul>
          <li><Link to="/">خانه</Link></li>
          <li><Link to="/books">کتاب‌ها</Link></li>
          <li><Link to="/about">درباره ما</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
