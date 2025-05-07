import { Routes, Route } from 'react-router-dom';
import News from '../pages/News';
import About from '../pages/About';
import Feedback from '../pages/Feedback';
import Services from '../pages/Services';
import NotFound from '../pages/NotFound';

export default function Article() {
  return (
    <article>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </article>
  );
}

