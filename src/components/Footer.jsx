import { useTranslation } from 'react-i18next';


export default function Footer() {
    const { t } = useTranslation();
  
    return (
      <footer>
        <p>© {new Date().getFullYear()} | {t('author')}: Елизавета Козлова</p>
      </footer>
    );
  }
  