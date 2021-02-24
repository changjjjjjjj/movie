import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  padding-left: 20px;
  font-size: 30px;
  align-items: center;
`;

const Back = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;

export const Navigation = () => {
  return (
    <Nav>
      <Back to="/">❮ BACK</Back>
    </Nav>
  );
};
