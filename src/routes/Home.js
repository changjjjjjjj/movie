import React from "react";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
  {
    movies {
      id
      title
      year
      summary
      medium_cover_image
      language
      genres
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;

export const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);
  console.log(data);
  return (
    <Container>
      <Header>
        <Title>Don't Know What to Watch?</Title>
        <Subtitle>Try this!</Subtitle>
      </Header>
      {loading && <Loading>Wait a Minute</Loading>}
      {!loading && (
        <Movies>
          {data?.movies?.map((movie) => (
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
        </Movies>
      )}
    </Container>
  );
};
