import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import MyNavbar from './components/CustomNav';
import TvShows from './components/TvShows';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Genres from './components/Genres';
import MovieDetails from './components/MovieDetails';
import Movies from './components/Movies';

function App() {
  return (
    <Container fluid className="App">
      <BrowserRouter>
        <header>
          <MyNavbar />
        </header>
        <section>
          <Genres />
        </section>
        <main>
          <Routes>
            <Route path="/tvshows" element={<TvShows />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie-details/:movieId" element={<MovieDetails />} /> 
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </Container>
  );
}

export default App;