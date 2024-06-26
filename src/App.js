import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Explore from './pages/explore/Explore';
import Details from './pages/details/Details';
import Anime from './pages/anime/Anime';
import Search from './pages/search/Search';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/explore/search/:searchQuery" element={<Search />} />
          <Route path="/explore/anime" element={<Anime />} />

        </Routes>
        
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
