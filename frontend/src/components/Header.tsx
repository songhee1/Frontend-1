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
import { useRecoilState, useRecoilValue } from 'recoil';
import { motion } from 'framer-motion';
import Alarm from './Alarm';
import { Link } from 'react-router-dom';

const Header = () => {
  //useState지옥..수정필요
  const [alarm, setAlarm] = useRecoilState(buttonAlarm);
  const [home, setHome] = useRecoilState(buttonHome);
  const [modal, setModal] = useRecoilState(buttonModal);
  const [profile, setProfile] = useRecoilState(buttonProfile);
  return (
    <>
    {/*Likethis는 임의로 해당 자리에 빈 컴포넌트를 넣어주어 posts 컴포넌트가 정중앙에 정렬되게 하였다. */}
    <Likethis>
    </Likethis>
    <Container>
      <NavigationBar>
        <Text>
          <h1>Unigram</h1>
        </Text>
        <Items>
          <Item
            onClick={() => {
              setHome((prev) => !prev);
              setAlarm(false);
              setModal(false);
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
              setHome((prev) => !prev);
              setModal(false);
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
              setModal((prev) => !prev);
              setAlarm(false);
              setHome((prev) => !prev);
              setProfile(false);
            }}
          >
            {modal ? (
              <>
                <AiOutlinePlusSquare />
              </>
            ) : (
              <>
                <AiOutlinePlusSquare />
              </>
            )}
            <span
              style={{ margin: '0px 5px', fontWeight: modal ? 600 : 'normal' }}
            >
              만들기
            </span>
          </Item>
          <Item
            onClick={() => {
              setModal(false);
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

    </>
  );
};
export default Header;
const Likethis = styled.div`
  width: 200px;
  height: 100%;
`;
const Container = styled.div`
  display: flex;
  transform: translateX(0px);
  height: 100vh;
  position: fixed;
  left: 0;
  top:0;
`;
const Text = styled.div`
  width: 100%;
  text-align: left;
  padding-left: 70px;
  padding-bottom: 20px;
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
    background-color: #f3f3f3;
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
