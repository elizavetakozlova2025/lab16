import { Link } from 'react-router-dom';

export default function Head() {
  return (
    <header>
      <nav>
        <Link to="/">Новости</Link>
        <Link to="/about">Об авторе</Link>
        <Link to="/feedback">Обратная связь</Link>
        <Link to="/services">Продукты и услуги</Link>
      </nav>
    </header>
  );
}

