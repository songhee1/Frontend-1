import styled from 'styled-components';
import {
  AiFillHome,
  AiOutlineHeart,
  AiOutlinePlusSquare,
  AiOutlineMenu,
  AiFillHeart,
  AiOutlineHome,
} from 'react-icons/ai';
import { IoPersonCircleOutline, IoPersonCircleSharp } from 'react-icons/io5';
import {
  buttonAlarm,
  buttonHome,
  buttonMake,
  buttonModal,
  buttonProfile,
} from '../atom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { motion, useAnimation } from 'framer-motion';
import Alarm from './Alarm';
import { Link } from 'react-router-dom';

const Header = () => {
  const [alarm, setAlarm] = useRecoilState(buttonAlarm);
  const [home, setHome] = useRecoilState(buttonHome);
  const [make, setMake] = useRecoilState(buttonMake);
  const [profile, setProfile] = useRecoilState(buttonProfile);
  const setModal = useSetRecoilState(buttonModal);
  const modal = useRecoilValue(buttonModal);
  const isAlarmClicked = useRecoilValue(buttonAlarm);
  return (
    <Container>
      <NavigationBar>
        <h2>Unigram</h2>

        <Items>
          <Item
            onClick={() => {
              setHome((prev) => !prev);
              setAlarm(false);
              setMake(false);
              setProfile(false);
            }}
          >
            {home ? (
              <>
                <AiFillHome />
              </>
            ) : (
              <AiOutlineHome />
            )}
            <Link to="/">
              <span
                style={{
                  margin: '0px 5px',
                  fontWeight: home ? 600 : 'normal',
                }}
              >
                홈
              </span>
            </Link>
          </Item>
          <Item
            onClick={() => {
              setAlarm((prev) => !prev);
              setHome(false);
              setMake(false);
              setProfile(false);
            }}
          >
            {alarm ? (
              <>
                <Cicle layoutId="circle" /> <AiFillHeart />
              </>
            ) : (
              <AiOutlineHeart />
            )}
            <span
              style={{ margin: '0px 5px', fontWeight: alarm ? 600 : 'normal' }}
            >
              알림
            </span>
          </Item>
          <Item
            onClick={() => {
              setMake((prev) => !prev);
              setAlarm(false);
              setHome(false);
              setProfile(false);
            }}
          >
            {make ? (
              <>
                <AiOutlinePlusSquare />
              </>
            ) : (
              <>
                <AiOutlinePlusSquare />
              </>
            )}
            <span
              style={{ margin: '0px 5px', fontWeight: make ? 600 : 'normal' }}
            >
              만들기
            </span>
          </Item>
          <Item
            onClick={() => {
              setMake(false);
              setAlarm(false);
              setHome(false);
              setProfile((prev) => !prev);
            }}
          >
            {profile ? (
              <>
                <IoPersonCircleSharp size="28px" />
                <Link to="/profile">
                  <div
                    style={{
                      margin: '0px 5px',
                      width: '100%',
                      fontWeight: 600,
                    }}
                  >
                    프로필
                  </div>
                </Link>
              </>
            ) : (
              <>
                <IoPersonCircleOutline size="26px" />
                <Link to="/profile">
                  <div
                    style={{
                      margin: '0px 5px',
                      width: '100%',
                      fontWeight: 'normal',
                    }}
                  >
                    프로필
                  </div>
                </Link>
              </>
            )}
          </Item>
          <Item>
            <AiOutlineMenu />
            <span style={{ margin: '0px 5px' }}>메뉴</span>
          </Item>
        </Items>
      </NavigationBar>
      <Alarm />
    </Container>
  );
};
export default Header;

const Container = styled.div`
  display: flex;
  top: 0;
  position: fixed;
  height: 100%;
`;
const NavigationBar = styled.div`
  border-right: 1px solid #c2c2c2;
  background-color: white;
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Items = styled.ul`
  justify-content: center;
  align-items: center;
  width: 80%;
`;
const Item = styled.li`
  padding: 2px 0px;
  margin: 10px 2px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  font-size: 19px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
    svg {
      font-size: 20px;
    }
    span {
      cursor: pointer;
    }
  }
  border-radius: 30px;
  height: 45px;
  width: 150px;
  svg,
  span {
    place-self: center center;
    width: 100%;
  }
  a {
    place-self: center;
  }
  position: relative;
`;
const IconSelect = styled.div``;
const Cicle = styled(motion.div)`
  position: absolute;
  top: 9px;
  left: 9px;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 100%;
`;
