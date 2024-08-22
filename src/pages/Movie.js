import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom"


function Movie() {

  const [movie, setMovie] = useState({})
  const params = useParams();
  const movieId = params.id

  useEffect(() =>{
    fetch(`http://localhost:3000/movies/${movieId}`)
    .then(response => response.json())
    .then(data => setMovie(data))
    .catch(error => console.error(error))
  }, [movieId])
  
  if(!movie.title){
    return <h1>Loading...</h1>
  }

  const genres = movie.genres.map(genre => 
  <span 
    key={genre}>
    {genre}
  </span>)

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {genres}
      </main>
    </>
  );
}

export default Movie;