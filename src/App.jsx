import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import Library from './pages/Library';

const initialMedia = [
  { id: 1, title: 'Giovanni\'s Room', author: 'James Baldwin', summary: 'A classic novel exploring complex themes of sexuality and identity.', available: true },
  { id: 2, title: 'Disclosure', author: 'Sam Feder', summary: 'An in-depth documentary film investigating trans representation in media.', available: true },
  { id: 3, title: 'Gender Trouble', author: 'Judith Butler', summary: 'Foundational text discussing performativity and gender politics.', available: true }
];
//this is temporary. im just making this work first

export default function App() {
  
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');
  useEffect(() => {
    const onLocationChange = () => setCurrentPath(window.location.hash);
    window.addEventListener('hashchange', onLocationChange);
    return () => window.removeEventListener('hashchange', onLocationChange);
  }, []);

  const [media, setMedia] = useState(initialMedia);
  const toggleCheckout = (id) => {
    setMedia(media.map(item => 
      item.id === id ? { ...item, available: !item.available } : item
    ));
  };

  let PageToRender;
  if (currentPath === '#/library') {
    PageToRender = <Library media={media} onToggleCheckout={toggleCheckout} />;
  } else {
    PageToRender = <Home />;
  }

  return (
    <div>
      <Navbar />
      {PageToRender}
    </div>
  );
}