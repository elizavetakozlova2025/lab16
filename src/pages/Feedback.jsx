import { useState } from 'react';
import { useTranslation } from 'react-i18next';


export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Сообщение отправлено!\nИмя: ${formData.name}\nEmail: ${formData.email}\nСообщение: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  const { t } = useTranslation();


  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>
        {t('name')}
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        {t('message')}:
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>
      <button type="submit">{t('send')}</button>
    </form>
  );
}
