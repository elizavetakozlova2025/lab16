import { useTranslation } from 'react-i18next';


export default function About() {
  const { t } = useTranslation();

  return <div className="contactsContainer"><h1>{t('university')}</h1></div>;
}
