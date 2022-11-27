import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {

  const [movies,setMovies] = useState([]);

  return (

      <div className="container-fluid movie-app">
        <div className="row">
          <MovieList
          movies={movies}/>
        </div>
      </div>

  );
}

export default App;
