import { Navigation } from "../components/Navigation";
import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      rating
      description_intro
      language
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 30%;
  height: 100%;
  object-fit: cover;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });
  console.log(data);

  return (
    <Container>
      <Navigation />
      <Row>
        <Column>
          <Title>{loading ? "Loading..." : `${data.movie.title}`}</Title>
          <Subtitle>
            {data?.movie?.language} · {data?.movie?.rating}
          </Subtitle>
          <Description>{data?.movie?.description_intro}</Description>
        </Column>
        <Poster bg={data?.movie?.medium_cover_image}></Poster>
      </Row>
    </Container>
  );
};
