import { useEffect } from 'react';
import styled from 'styled-components';
import Login from './Login';
import logoImage from '../images/logos/logo.png';
import Slider from './Slider';
import Footer from './Footer';
const Intro = () => {
  return (
    <Container>
      
      <Info>
        <Logo></Logo>
        <Slider />
      </Info>
      <LoginContainer>
        Unigram
        <Login />
      </LoginContainer>
    
      <Footer/>
    </Container>
  );
};
export default Intro;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 20px;
  padding: 10px;
  padding-bottom:110px;
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

