import styled from 'styled-components';
import image from '../images/logos/image1.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { buttonAlarm } from '../atom';
import { useEffect } from 'react';
import { useRef } from 'react';
const SlideContainer = styled(motion.div)`
  background-color: white;
  height: 100%;
  width: 120%;
  padding: 20px;
  border: 1px solid #c2c2c2;
  border-top-right-radius: 20px;
  box-shadow: rgba(135, 135, 138, 0.2) 12px 5px 27px -5px,
    rgba(0, 0, 0, 0.3) 12px 8px 16px -8px;
  transform-origin: left;
  z-index:-1;
`;
const box = {
  start: {
    opacity: 0,
    scale: 1,
    x: -20,
    transition: {
      type: 'linear',
      duration: 0.3,
    },
  },
  end: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: 'linear',
      duration: 0.3,
    },
  },
};
const Alarm = () => {
  const animationAlarm = useAnimation();
  const alarmState = useRecoilValue(buttonAlarm);
  const slide = useRef(null);
  useEffect(() => {
    if (alarmState) {
      animationAlarm.start('end');
    } else {
      animationAlarm.start('start');
    }
  }, [alarmState]);

  return (
    <>
      
        <SlideContainer
          ref={slide}
          variants={box}
          initial="start"
          animate={animationAlarm}
        >
          <h2 style={{ paddingBottom: '10px' }}>알림</h2>
          <Slide>
            <h3>이번 달</h3>
            <Content>
              <InfoContainer>
                <Logo src={image}></Logo>
                <Paragraph>
                  songhee._.23님이 회원님을 팔로우하기 시작했습니다.
                </Paragraph>
                <Follow>팔로우</Follow>
              </InfoContainer>
              <InfoContainer>
                <Logo src={image}></Logo>
                <Paragraph>
                  songhee._.23님이 회원님을 팔로우하기 시작했습니다.
                </Paragraph>
                <Follow>팔로우</Follow>
              </InfoContainer>
            </Content>
          </Slide>
          <hr />
          <Slide>
            <h3>이전 활동</h3>
            <Content>
              <InfoContainer>
                <Logo src={image}></Logo>
                <Paragraph>
                  songhee._.23님이 회원님을 팔로우하기 시작했습니다.
                </Paragraph>
                <Follow>팔로우</Follow>
              </InfoContainer>
              <InfoContainer>
                <Logo src={image}></Logo>
                <Paragraph>
                  songhee._.23님이 회원님을 팔로우하기 시작했습니다.
                </Paragraph>
                <Follow>팔로우</Follow>
              </InfoContainer>
            </Content>
          </Slide>
        </SlideContainer>
    </>
  );
};
export default Alarm;

const Slide = styled.div``;
const Content = styled.div`
  padding: 5px;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Follow = styled.button`
  background-color: #dadada;
  border: 0px;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
`;
const Logo = styled.img`
  height: 40px;
  border-radius: 50px;
  margin: 10px 10px;
`;
const Paragraph = styled.p`
  width: 60%;
  font-size: 15px;
`;
