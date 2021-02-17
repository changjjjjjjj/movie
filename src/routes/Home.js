import React, { useState, useEffect } from "react";
import axios from "axios";
import { gql, useQuery } from "@apollo/client";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

export const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get(
        "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
      );
      setMovies(movies);
      setIsLoading(false);
    };
    getMovies();
  }, []);

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader_text">
          <span>Loading..</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </section>
  );
};
