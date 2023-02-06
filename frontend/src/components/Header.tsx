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
import logo from '../images/logos/logo.png';
import { connect } from 'react-redux';
const Header = (props: any) => {
  //useState지옥..수정필요
  // const [alarm, setAlarm] = useRecoilState(buttonAlarm);
  const [home, setHome] = useRecoilState(buttonHome);
  // const [modal, setModal] = useRecoilState(buttonModal);
  // const [profile, setProfile] = useRecoilState(buttonProfile);
  return (
    <>
      {/*Likethis는 임의로 해당 자리에 빈 컴포넌트를 넣어주어 posts 컴포넌트가 정중앙에 정렬되게 하였다. */}
      {/* <Likethis/> */}
      <Container>
        <NavigationBar>
          <Text>
            <h1>Unigram</h1>
            <Logo />
          </Text>
          <Items>
            <Item
              onClick={() => {
                setHome((prev) => !prev);
                props.dispatch({ type: 'alarmFalse' });
                props.dispatch({ type: 'modalFalse' });
                props.dispatch({ type: 'profileFalse' });
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
                props.dispatch({ type: 'changeAlarmState' });
                setHome((prev) => !prev);
                props.dispatch({ type: 'modalFalse' });
              }}
            >
              {props.isAlarmOpen ? (
                <>
                  <Cicle layoutId="circle" /> <AiFillHeart />
                </>
              ) : (
                <AiOutlineHeart />
              )}
              <span
                style={{
                  margin: '0px 5px',
                  fontWeight: props.isAlarmOpen ? 600 : 'normal',
                }}
              >
                알림
              </span>
            </Item>
            <Item
              onClick={() => {
                props.dispatch({ type: 'modalTrue' });
                props.dispatch({ type: 'alarmFalse' });
                setHome((prev) => !prev);
              }}
            >
              {props.isModalOpen ? (
                <>
                  <AiOutlinePlusSquare />
                </>
              ) : (
                <>
                  <AiOutlinePlusSquare />
                </>
              )}
              <span
                style={{
                  margin: '0px 5px',
                  fontWeight: props.isModalOpen ? 600 : 'normal',
                }}
              >
                만들기
              </span>
            </Item>
            <Item
              onClick={() => {
                props.dispatch({ type: 'modalFalse' });
                props.dispatch({ type: 'alarmFalse' });
                setHome(false);
                props.dispatch({ type: 'changeProfileState' });
              }}
            >
              {props.isProfileOpen ? (
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
                    <span
                      style={{
                        margin: '0px 5px',
                        width: '100%',
                        fontWeight: 'normal',
                      }}
                    >
                      프로필
                    </span>
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

function mapStateToProps(state: any, ownProps: any) {
  console.log(state);
  return {
    isModalOpen: state.modalReducer,
    isAlarmOpen: state.alarmReducer,
    isProfileOpen: state.profileReducer,
  };
}

export default connect(mapStateToProps)(Header);

const Container = styled.div`
  display: flex;
  transform: translateX(0px);
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
`;

const Logo = styled.div`
  background-image: url(${logo});
  background-size: cover;
  width: 100px;
  height: 100px;
`;
const Text = styled.div`
  @media (max-width: 1800px) {
    width: 80%;
    height: 60px;
    padding-bottom: 10%;
    /* padding-bottom:20px; */
    h1 {
      /* width: 200px; */
      display: block;
    }
    div {
      display: none;
    }
    text-align: center;
  }
  @media (max-width: 1280px) {
    width: 80%;
    height: 60px;
    padding-bottom: 10%;
    /* padding-bottom:20px; */
    h1 {
      /* width: 200px; */
      display: block;
    }
    div {
      display: none;
    }
    text-align: center;
  }
  @media (max-width: 1024px) {
    width: 100%;
    height: 60px;
    div {
      display: block;
    }
    h1 {
      display: none;
    }
    display: flex;
    align-items: center;
    padding: 0px;
  }
`;

const NavigationBar = styled.div`
  border-right: 1px solid #c2c2c2;
  background-color: white;
  @media (max-width: 1800px) {
    /* width: 200px; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1024px) {
    width: 80px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
// const Likethis=styled.div`
//   @media (max-width: 1800px) {
//     /* width: 200px; */
//     width: 200px;
//     height: 100%;
//   }
//   @media (max-width: 1024px) {
//     width: 80px;
//     height: 100%;
//   }
// `
const Items = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Item = styled.li`
  padding: 2px 0px;
  margin: 10px 2px;
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
  svg,
  span {
    place-self: center center;
    width: 100%;
  }
  a {
    place-self: center;
  }

  @media (max-width: 1800px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    font-size: 19px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;

    position: relative;
  }
  @media (max-width: 1024px) {
    width: 80%;
    span,
    a {
      display: none;
    }
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
  }
`;
const Cicle = styled(motion.div)`
  position: absolute;
  top: 9px;
  @media (max-width: 1280px) {
    left: 20px;
  }
  @media (max-width: 1024px) {
    left: 9px;
  }
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 100%;
`;
