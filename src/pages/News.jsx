import { useTranslation } from 'react-i18next';

export default function News() {
  const { t } = useTranslation();

  return (
    <div className="newsContainer">
      <h1>{t('news')}</h1>
      <p>{t('welcome')}</p>
    </div>
  );
  }
  