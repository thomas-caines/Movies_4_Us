// From Other Files
import './App.css';
import { Home } from './views/Home';
import { Movies } from './views/Movies';
import { MovieDisplay } from './views/MovieDisplay';
import { MovieReviewForm } from './views/MovieReviewForm';
import { MovieReviewDisplay } from './views/MovieReviewDisplay';
// From Dependecies 
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <h1>This is for Andrew</h1>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/movies' element={ <Movies /> } /> 
        <Route path='/movies/:id' element={ <MovieDisplay /> } />
        <Route path='/movies/review/:id' element={ <MovieReviewForm /> } />
        <Route path='/movies/review/display/:review_id' element={ <MovieReviewDisplay /> } />
      </Routes>
    </div>
  )
}

export default App
