import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
      )
      .then((response) => {
        setMovies(response.data.data.movies);
        setIsLoading(false);
      });
    return () => setIsLoading(true);
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

/*class Home extends React.Component {
  state = {
    isLoading: true,
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    console.log("rendering");
    const { isLoading, movies } = this.state;
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
  }
}*/

export default Home;
