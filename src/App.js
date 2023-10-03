import "./App.css";
import { SearchForm } from "./components/SearchForm";
import { Display } from "../src/components/Display";
import { useEffect, useState } from "react";

function App() {
  const [movieList, setMovieList] = useState([]);

  // const [dMovie, setDMovie] = useState();

  // const movieFilter = (mode) => {
  //   if (!mode) {
  //     return setDMovie(movieList);
  //   }
  //   setDMovie(movieList.filter((item) => item.mode === mode));
  // };

  const addToMovieList = (movie) => {
    if (movieList.some((item) => item.imdbID === movie.imdbID)) {
      const updatedList = movieList.filter(
        (item) => item.imdbID !== movie.imdbID
      );
      setMovieList([...updatedList, movie]);
    }

    // setDMovie([...movieList, movie]);
    //so so array are same
  };

  //this func  delete item from movieList and async with dMovieList
  const handleOnDeleteList = (id) => {
    const mov = movieList.filter(({ imdbID }) => imdbID !== id);
    setMovieList(mov);
    // setDMovie(mov);
  };
  console.log(movieList);
  return (
    <div className="wrapper text-warning bg-dark min-vh-100 ">
      <div className="container">
        {/* title */}
        <div className="row">
          <div className="col">
            <h1 className="mt-5 text-center">Welcome to Movie Collection</h1>
          </div>
        </div>
        <hr />
        {/* search area */}
        {/* search> form */}
        <SearchForm addToMovieList={addToMovieList} movieList={movieList} />
        {/* card */}
        {/* movie */}
        {/* buttons */}
        {/* card*/}

        {/* dMovie will be flitered */}
        <Display movieList={movieList} deleteFunc={handleOnDeleteList} />
      </div>
    </div>
  );
}

export default App;
