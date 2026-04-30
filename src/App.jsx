import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Library from './pages/Library';
import Events from './pages/Events';
import Contact from './pages/Contact';
import About from './pages/About';

const initialMedia = [
  { id: 1, title: 'Giovanni\'s Room', author: 'James Baldwin', summary: 'A classic novel exploring complex themes of sexuality and identity.', available: true },
  { id: 2, title: 'Disclosure', author: 'Sam Feder', summary: 'An in-depth documentary film investigating trans representation in media.', available: true },
  { id: 3, title: 'Gender Trouble', author: 'Judith Butler', summary: 'Foundational text discussing performativity and gender politics.', available: true }
];

export default function App() {
  const [media, setMedia] = useState(initialMedia);

  const toggleCheckout = (id) => {
    setMedia(media.map(item => 
      item.id === id ? { ...item, available: !item.available } : item
    ));
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <NavigationBar />
      <main className="flex-grow-1 d-flex flex-column">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/library" element={<Library media={media} onToggleCheckout={toggleCheckout} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}