import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { buttonAlarm, buttonModal } from '../atom';
import Contents from './Contents';
import Header from './Header';
import Posts from './Posts';
import Alarm from './Alarm';
import Modal from './Modal';
const Home = () => {
  const modal = useRecoilValue(buttonModal);

  return (
    <>
      {modal ? <Modal /> : null}
      <Container>
        <Header />
        <Posts />
      </Container>
    </>
  );
};
export default Home;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
