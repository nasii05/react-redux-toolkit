import './App.css'
import MovieInput from './components/MovieInput'
import MovieList from './components/movieList'
import UserListAxios from './components/UserListAxios'


function App() {

  return (
    <>
      {" "}
      <MovieInput />
      <MovieList />
      <UserListAxios/>
    </>
  )
}

export default App
