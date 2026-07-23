import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Home from '@pages/Home';
import About from '@pages/About';
import Services from '@pages/Services';
import Sermons from '@pages/Sermons';
import Events from '@pages/Events';
import News from '@pages/News';
import Giving from '@pages/Giving';
import JoinUs from '@pages/JoinUs';
import Contact from '@pages/Contact';
import Prayer from '@pages/Prayer';
import ArticlesOfFaith from '@pages/ArticlesOfFaith';
import NotFound from '@pages/NotFound';
import '@styles/globals.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/giving" element={<Giving />} />
            <Route path="/join" element={<JoinUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/prayer" element={<Prayer />} />
            <Route path="/articles-of-faith" element={<ArticlesOfFaith />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
