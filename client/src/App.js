import { useEffect } from 'react';

import './App.scss';
import WebFont from 'webfontloader';

import { Route, Routes } from 'react-router-dom';
import Header from './components/navigation/Header';
import Home from './components/home';
import Footer from './components/footer';

function App() {
  // loading fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Oswald', 'Roboto']
      }
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
