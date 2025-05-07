import { useTranslation } from 'react-i18next';

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <div className="contactsContainer">
      <p>{t('phone')}</p>
    </div>
  );
  }
  