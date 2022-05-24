import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <div className="background">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies:filmType" element={<Movies />} />
          <Route path="/movieDetail:movieId" element={<MovieDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
