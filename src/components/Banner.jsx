import React from "react";
import styled from "styled-components";

const Container = styled.div`
  line-height: 30px;
  background-color: teal;
  color: white;
  text-align: center;
  padding: 5px;
  font-weight: 700;
  font-size: 14px;
`;
const Banner = () => {
  return <Container>Super deals! Free shipping too!</Container>;
};

export default Banner;
