import { BrowserRouter } from 'react-router-dom';
import Card from './components/Card';
import Carousel from './components/Carousel';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBannersAsync } from './redux/banner_action';
import Products from './pages/Products';
import Product from './pages/Product';


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getBannersAsync())
  },[dispatch])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path={"/alter-client/" || "/"} element={<Home />} />
          <Route path="/alter-client/about" element={<About />} />
          <Route path="/alter-client/products" element={<Products />} />
          <Route path="/alter-client/contact" element={<About />} />
          <Route path="/alter-client/products/:id" element={<Product />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
