import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

function App() {

  const [movies,setMovies] = useState([]);
  const [searchValue,setSearchValue]=useState('');

  const getMoviesRequest= async(searchValue)=>{
    const url=`http://www.omdbapi.com/?s=${searchValue}&apiKey=132d50a3`;
    const response=await fetch(url);
    const responseJson=await response.json();
    if(responseJson.Search){
      setMovies(responseJson.Search)
    }
  }

  useEffect(()=>{
    getMoviesRequest(searchValue);
  },[searchValue])

  return (

      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Movies" />
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <div className="row">
          <MovieList
          movies={movies}/>
        </div>
      </div>

  );
}

export default App;
