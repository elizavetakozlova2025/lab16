import { Link } from 'react-router-dom';

export default function Head() {
  return (
    <header>
      <nav>
        <Link to="/">Новости</Link> |{' '}
        <Link to="/about">О проекте</Link> |{' '}
        <Link to="/contacts">Контакты</Link>
      </nav>
    </header>
  );
}
