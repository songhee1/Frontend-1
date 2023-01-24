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
      <h2>Unigram</h2>
      <Items>
        <Item
          onClick={() => {
            setHome((prev) => !prev);
            setAlarm(false);
          }}
        >
          {home ? <AiFillHome /> : <AiOutlineHome />}
          <span style={{ margin: '0px 5px' }}>홈</span>
        </Item>
        <Item
          onClick={() => {
            setAlarm((prev) => !prev);
            setHome(false);
          }}
        >
          {alarm ? <AiFillHeart /> : <AiOutlineHeart />}
          <span style={{ margin: '0px 5px' }}>알림</span>
        </Item>
        <Item onClick={() => setMake((prev) => !prev)}>
          <AiOutlinePlusSquare />
          <span style={{ margin: '0px 5px' }}>만들기</span>
        </Item>
        <Item>
          <Link to="/profile">
            <BsPersonCircle />
            <span style={{ margin: '0px 5px' }}> 프로필</span>
          </Link>
        </Item>
        <Item>
          <AiOutlineMenu />
          <span style={{ margin: '0px 5px' }}>메뉴</span>
        </Item>
      </Items>
    </NavigationBar>
  );
};
export default Header;

const NavigationBar = styled.div`
  background-color: white;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  position: fixed;
  border: 1px solid #a3a3a3;
`;
const Items = styled.ul`
  justify-content: center;
  align-items: center;
`;
const Item = styled.li`
  margin: 25px 0px;
  display: flex;
  align-items: center;
  font-size: 20px;
`;
