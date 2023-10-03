import React, { useEffect, useRef, useState } from "react";
import { CustomCard } from "./CustomCard";
import { fetchMovie } from "../utils/axiosHelper";
import { randomCharGenerator } from "../utils/randomStr";

export const SearchForm = ({ addToMovieList, movieList }) => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");
  const strRef = useRef("");

  useEffect(() => {
    const randChar = randomCharGenerator();

    //Immediate Envoke Function
    (async () => {
      const randMovie = await fetchMovie(randChar); //with random charactor getting random movie
      setMovie(randMovie);
      //with movie state customcard below works
    })();
  }, []);
  const handleOnSubmit = async (e) => {
    setMovie({});
    setError("");

    e.preventDefault();

    const str = strRef.current.value;

    const data = await fetchMovie(str);

    if (data.Response === "True") {
      setMovie(data);
    } else {
      // {"Response":"False","Error":"Movie not found!"}
      setError(data.Error);
    }
  };

  const handleOnDelete = () => {
    setMovie({});
  };

  const func = (mode) => {
    //movie is an object state and making another propety mode:"happy"
    addToMovieList({ ...movie, mode });

    setMovie({});
    //where I get input data set back to beginning
    strRef.current.value = "";
  };
  return (
    <div className="bg-black p-5 rounded ">
      <div className="row g-2">
        <div className="col-md">
          <form onSubmit={handleOnSubmit}>
            <div class="mb-3">
              <input
                ref={strRef}
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Seach movie"
              />
            </div>

            <div className="d-grid">
              <button type="submit" class="btn btn-warning">
                Search Movie
              </button>
            </div>
          </form>
        </div>

        <div className="col-md d-flex justify-content-center">
          {error && <div className="alert alert-danger">{error}</div>}
          {/* movie is a state */}
          {movie?.imdbID && (
            <CustomCard movie={movie} func={func} deleteFunc={handleOnDelete} />
          )}
        </div>
      </div>
    </div>
  );
};
