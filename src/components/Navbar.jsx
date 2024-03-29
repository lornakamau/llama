import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  margin-left: 25px;
  align-items: center;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
const Logo = styled.h1`
  font-weight: bolder;
  font-size: 24px;
`;
const MenuItem = styled.div`
    font-size; 14px;
    cursor: pointer;
    margin-left: 25px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>en</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: "16px" }}></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Llama.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
