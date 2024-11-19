import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import Footer from './containers/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header Component */}
        <Header />

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<div>404 Not Found</div>} /> {/* 404 Page */}
        </Routes>

        {/* Footer Component */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
