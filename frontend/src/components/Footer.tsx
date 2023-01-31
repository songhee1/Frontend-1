import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';
const Footer = () => {
  return (
    <Container>
      <FootContainer>
        <Foot>
          <Item>소개</Item>
          <Item>블로그</Item>
          <Item>채용</Item>
          <Item>도움말</Item>
          <Item>API</Item>
          <Item>개인정보처리방침</Item>
          <Item>약관</Item>
          <Item>인기계정</Item>
          <Item>해시태그</Item>
          <Item>위치</Item>
          <Item>연락처 업로드&비사용자</Item>
        </Foot>
        <Translate>
          <Item>
            한국어
            <AiOutlineDown />
          </Item>
        </Translate>
      </FootContainer>
    </Container>
  );
};
export default Footer;
const Container = styled.div`
  position: absolute;
  bottom: -100px;
  height: 110px;
`;
const FootContainer = styled.footer``;
const Foot = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Item = styled.li`
  padding: 20px;
`;
const Translate = styled(Foot)``;
