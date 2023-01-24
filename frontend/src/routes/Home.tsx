import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { buttonAlarm } from '../atom';
import Contents from './Contents';
import Header from './Header';
const Home = () => {
  const isAlarmClicked = useRecoilValue(buttonAlarm);

  return (
    <Container>
      <Header />
      {isAlarmClicked ? (
        <SlideContainer>
          알림
          <Slide>
            <p>이번 달</p>
            <Content></Content>
          </Slide>
          <Slide>
            <p>이전 활동</p>
            <Content></Content>
          </Slide>
        </SlideContainer>
      ) : null}
      <Contents />
    </Container>
  );
};
export default Home;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const SlideContainer = styled.div`
  position: fixed;
  top: 0;
  left: 20%;
  background-color: white;
  height: 100%;
  width: 20%;
`;
const Slide = styled.div``;
const Content = styled.div``;
