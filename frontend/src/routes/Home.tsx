import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { buttonAlarm, buttonModal } from '../atom';

import Alarm from '../components/Alarm';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Posts from '../components/Posts';

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
  width: 100vw;
  display: flex;
  flex-direction: row;
`;
