import styled from 'styled-components';
import Contents from './Contents';
import Header from './Header';
const Home = () => {
  return (
    <Container>
      <Header />
      <Contents />
    </Container>
  );
};
export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
