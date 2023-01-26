import styled from 'styled-components';
import image from '../images/logos/image1.jpg';
const Alarm = () => {
  return (
    <SlideContainer>
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
const SlideContainer = styled.div`
  background-color: white;
  height: 100%;
  width: 30%;
  padding: 20px;
  border: 1px solid #a3a3a3;
`;
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
