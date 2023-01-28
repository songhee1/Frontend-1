import styled from 'styled-components';
import image from '../images/logos/image1.jpg';
import { motion } from 'framer-motion';
const Alarm = () => {
  const SlideContainer = styled(motion.div)`
    background-color: white;
    height: 100%;
    width: 200px;
    padding: 20px;
    border: 1px solid #c2c2c2;
  `;
  const box = {
    start: {
      opacity: 0,
      scale: 1,
      x: -100,
    },
    end: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 0.5,
      },
    },
  };
  return (
    <SlideContainer variants={box} initial="start" animate="end">
      <h3>알림</h3>
      <Slide>
        <p>이번 달</p>
        <Content>
          <InfoContainer>
            <Logo src={image}></Logo>
            <div>song hee</div>
            <p>님이 회원님을 팔로우하기 시작했습니다.</p>
            <button>팔로우</button>
          </InfoContainer>
        </Content>
      </Slide>
      <hr />
      <Slide>
        <p>이전 활동</p>
        <Content>
          <InfoContainer>
            <Logo src={image}></Logo>
            <div>song hee</div>
          </InfoContainer>
        </Content>
      </Slide>
    </SlideContainer>
  );
};
export default Alarm;

const Slide = styled.div``;
const Content = styled.div``;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
const Logo = styled.img`
  height: 40px;
  border-radius: 50px;
  margin: 10px 20px;
`;
