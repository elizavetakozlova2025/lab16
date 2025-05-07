import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="tableContainer">
      <table className="table">
        <thead>
          <tr>
            <th>{t('product')}</th>
            <th>{t('description')}</th>
            <th>{t('price')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t('site')}</td>
            <td>{t('site_desc')}</td>
            <td>1000 {t('rub')}</td>
          </tr>
          <tr>
            <td>{t('consult')}</td>
            <td>{t('consult_desc')}</td>
            <td>100000 {t('rub')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
