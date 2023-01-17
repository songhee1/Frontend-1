import styled from 'styled-components';
import {
  AiFillHome,
  AiOutlineHeart,
  AiOutlinePlusSquare,
  AiOutlineMenu,
  AiFillHeart,
  AiOutlineHome,
} from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { buttonAlarm, buttonHome, buttonMake, buttonProfile } from '../atom';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

const Header = () => {
  const [alarm, setAlarm] = useRecoilState(buttonAlarm);
  const [home, setHome] = useRecoilState(buttonHome);
  const [make, setMake] = useRecoilState(buttonMake);
  const [profile, setProfile] = useRecoilState(buttonProfile);
  return (
    <NavigationBar>
      Unigram
      <Items>
        <Item
          onClick={() => {
            setHome((prev) => !prev);
          }}
        >
          {home ? <AiFillHome /> : <AiOutlineHome />}홈
        </Item>
        <Item onClick={() => setAlarm((prev) => !prev)}>
          {alarm ? <AiFillHeart /> : <AiOutlineHeart />}
          알림
        </Item>
        <Item onClick={() => setMake((prev) => !prev)}>
          <AiOutlinePlusSquare />
          만들기
        </Item>
        <Item>
          <Link to="/profile">
            <BsPersonCircle />
            프로필
          </Link>
        </Item>
        <Item>
          <AiOutlineMenu />
          메뉴
        </Item>
      </Items>
    </NavigationBar>
  );
};
export default Header;

const NavigationBar = styled.div`
  background-color: white;
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  position: fixed;
`;
const Items = styled.ul`
  justify-content: center;
  align-items: center;
`;
const Item = styled.li`
  margin: 20px 0px;
  justify-content: center;
  align-items: center;
`;
