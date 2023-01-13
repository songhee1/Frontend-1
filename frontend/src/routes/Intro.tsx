import { useEffect } from 'react';
import styled from 'styled-components';
import Login from './Login';
import logoImage from '../Logo.png';
import axios from 'axios';
import Slider from './Slider';
const Intro = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  `;
  const Info = styled.div`
    background-color: #fcfcfc;
    width: 600px;
    height: 500px;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  `;
  const Logo = styled.div`
    background-image: url(${logoImage});
    height: 200px;
    width: 150px;
    background-size: contain;
  `;
  
 
  const LoginContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    font-size: 30px;
    width: 400px;
    height: 400px;
    justify-content: center;
    align-items: center;
    margin: 0px 20px;
    border: 1px solid #b2bec3;
  `;
 

  return (
    <Container>
      <Info>
        <Logo></Logo>
          <Slider/>
      </Info>
      <LoginContainer>
        Unigram
        <Login />
      </LoginContainer>
    </Container>
  );
};
export default Intro;
