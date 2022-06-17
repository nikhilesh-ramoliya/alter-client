import { BrowserRouter } from 'react-router-dom';
import Card from './components/Card';
import Carousel from './components/Carousel';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/alter-client/" element={<Home />} />
          <Route path="/alter-client/about" element={<About />} />
          <Route path="/alter-client/product" element={<About />} />
          <Route path="/alter-client/contact" element={<About />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
