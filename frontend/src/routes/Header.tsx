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
import {
  buttonAlarm,
  buttonHome,
  buttonMake,
  buttonModal,
  buttonProfile,
} from '../atom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
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
  useEffect(() => {
    console.log(modal);
  }, [modal]);
  return (
    <Container>
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
          <Item onClick={() => setModal((prev) => !prev)}>
            <AiOutlinePlusSquare />
            <span style={{ margin: '0px 5px' }}>만들기</span>
          </Item>
          <Item>
            {/* <Link to="/profile"> */}
            <BsPersonCircle />
            <span style={{ margin: '0px 5px' }}>프로필</span>
            {/* </Link> */}
          </Item>
          <Item>
            <AiOutlineMenu />
            <span style={{ margin: '0px 5px' }}>메뉴</span>
          </Item>
        </Items>
      </NavigationBar>
      {isAlarmClicked ? <Alarm /> : null}
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
  padding-left: 10px;
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  font-size: 19px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
    svg {
      font-size: 20px;
    }
  }
  border-radius: 30px;
  height: 45px;
  width: 80%;
  svg,
  span {
    place-self: center start;
  }
  a {
    width: 45px;
    height: 100%;
  }
`;
const IconSelect = styled.div``;
