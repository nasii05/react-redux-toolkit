import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMovie, removeMovie } from '../movieSlice'

const MovieList = () => {
  const movies = useSelector((state) => state.computer.movies);
  const dispatch = useDispatch() ;

  const handleRemoveMovie = (id) => {
    dispatch(removeMovie(id))
  }
  return (
    <div>
      {" "}
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          {" "}
          {movie.name} <button onClick={() => handleRemoveMovie(movie.id)}>Delete Movie</button>
          </div>
      ))}
    </div>
  )
}

export default MovieList