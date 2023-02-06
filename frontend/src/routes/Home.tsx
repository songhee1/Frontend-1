import { connect } from 'react-redux';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { buttonAlarm, buttonModal } from '../atom';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Posts from '../components/Posts';

const Home = (props: any) => {
  const modal = useRecoilValue(buttonModal);
  console.log(props.isModalOpen);
  return (
    <>
      <Container>
        {props.isModalOpen ? <Modal /> : null}
        <Header />
        <Posts />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;
function mapStateToProps(state: any, ownProps: any) {
  return {
    isModalOpen: state.modalReducer,
  };
}
export default connect(mapStateToProps)(Home);
