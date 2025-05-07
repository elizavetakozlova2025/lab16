import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    news: "News",
                    author: "Author",
                    contacts: "Contacts",
                    services: "Products & Services",
                    about: "About",
                    welcome: "Sunny and joyful day at Southern Federal University!",
                    university: "Southern Federal University",
                    phone: "Phone: +7 (989) 714-24-29",
                    feedback: "Feedback",
                    send: "Send",
                    name: "Name",
                    message: "Message",
                    product: "Product",
                    description: "Description",
                    price: "Price",
                    site: "Website",
                    site_desc: "Responsive website development",
                    consult: "Consultation",
                    consult_desc: "Help with programming education",
                    rub: "RUB"
                },
            },
            ru: {
                translation: {
                    news: "Новости",
                    author: "Aвтор",
                    contacts: "Контакты",
                    services: "Продукты и услуги",
                    about: "О нас",
                    welcome: "Сегодня в Южном федеральном университете солнечно и весело!",
                    university: "Южный федеральный университет",
                    phone: "Телефон: +7 (989) 714-24-29",
                    feedback: "Обратная связь",
                    send: "Отправить",
                    name: "Имя",
                    message: "Сообщение",
                    product: "Продукт",
                    description: "Описание",
                    price: "Стоимость",
                    site: "Сайт",
                    site_desc: "Разработка адаптивных сайтов под ключ",
                    consult: "Консультация",
                    consult_desc: "Помощь в обучении программированию",
                    rub: "руб."

                },
            },
        },
        fallbackLng: "ru",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
