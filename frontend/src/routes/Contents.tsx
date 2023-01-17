import styled from 'styled-components';
import Posts from './Posts';
const Contents = () => {
  return (
    <RightContainer>
      <Posts></Posts>
    </RightContainer>
  );
};
export default Contents;

const RightContainer = styled.div`
  background-color: whitesmoke;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
