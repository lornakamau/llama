import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { carouselItems } from "../data";

const Container = styled.div`
  height: calc(100vh - 60px - 30px - 10px);
  width: 100%;
  display: flex;
  position: relative;
  overflow-x: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f7eeee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  /* vertically center the arrow */
  top: 0;
  bottom: 0;
  margin: auto;
  /* vertically center the arrow */
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  z-index: 99;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.carouselInd * -100}vw);
  transition: all 1.5s ease;
`;

const CarouselItem = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100%;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const SubTitle = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  border-radius: 0.25rem;
  border: 1px solid lightgrey;
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 20px;
`;
const Carousel = () => {
  const handleClick = (direction) => {
    if (direction === "left") {
      setCarouselInd(carouselInd > 0 ? carouselInd - 1 : 3);
    }
    if (direction === "right") {
      setCarouselInd(carouselInd < 3 ? carouselInd + 1 : 0);
    }
  };
  const [carouselInd, setCarouselInd] = useState(0);
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosOutlined></ArrowBackIosOutlined>
      </Arrow>
      <Wrapper carouselInd={carouselInd}>
        {carouselItems.map((item) => (
          <CarouselItem>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <SubTitle>{item.sub_title}</SubTitle>
              <Button>Shop now</Button>
            </InfoContainer>
          </CarouselItem>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlined></ArrowForwardIosOutlined>
      </Arrow>
    </Container>
  );
};

export default Carousel;
