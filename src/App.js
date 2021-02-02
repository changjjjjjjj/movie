import PropTypes from "prop-types"

function Movie({Title, series}){
  return (
    <h1>My favorite movie is {Title} {series}</h1>
  );
}


const movieILike = [{id:1, Title: "Irom Man", series: 1}, {id:2, Title: "Captain America", series: 2}, {id:3, Title: "Hulk", series: 2}];

function renderMovie(movie){
  return <Movie key={movie.id} Title={movie.Title} series={movie.series} />
}

Movie.propTypes = {
  Title: PropTypes.string.isRequired,
  series: PropTypes.number.isRequired
};

function App() {
  return (
    <div className="App">
      {movieILike.map(renderMovie)};
    </div>
  );
}

export default App;
