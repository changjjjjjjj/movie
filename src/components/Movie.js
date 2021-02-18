import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  border-radius: 7px;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.poster});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

const Movie = ({ id, poster }) => {
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster poster={poster} />
      </Link>
    </Container>
  );
};

export default Movie;
