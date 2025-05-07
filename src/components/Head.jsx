import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export default function Head() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="header">
      <nav className="nav">
        <a href="/">{t('news')}</a>
        <a href="/about">{t('about')}</a>
        <a href="/contacts">{t('contacts')}</a>
        <a href="/services">{t('services')}</a>
        <button onClick={toggleLang} className="lang_btn">
        {i18n.language === 'ru' ? 'EN' : 'RU'}
      </button>
      </nav>

    </header>
  );
}

