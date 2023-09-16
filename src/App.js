import './App.css';
import Homepage from './Components/homepage/Homepage'
import MovieDetailsPage from './Components/moviedetails/MoviesDetailsPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage/>} />
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
