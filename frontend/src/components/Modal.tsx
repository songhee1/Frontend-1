import styled from 'styled-components';

import { GrClose } from 'react-icons/gr';
import { useRecoilState } from 'recoil';
import { buttonModal, modalPageNum } from '../atom';
import { ImImages } from 'react-icons/im';
import { useState, useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';

const Modal = (props: any) => {
  // const [modal, setModal] = useRecoilState(buttonModal);
  const [imageSrc, setImageSrc] = useState<string>('');
  const encodeFileToBase64 = (e: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.currentTarget.files[0]);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc((prev) => reader.result as string);
        setPageNum(2);
        resolve;
      };
    });
  };

  const motionModal = {
    start: {},
    end: {},
  };
  // useEffect(() => {
    // console.log(modal);
  // }, [modal]);
  const [pageNum, setPageNum] = useRecoilState(modalPageNum);
  return (
    <ModalContainer>
      <CloseContainer onClick={() => props.dispatch({ type: 'modalFalse' })}>
        <GrClose color="blue" size="2rem" />
      </CloseContainer>
      <ModalItem>
        {pageNum == 2 ? (
          <>
            <ModalHead2>
              <BiArrowBack
                onClick={() => {
                  setImageSrc((prev) => '');
                  setPageNum(1);
                }}
                size="35"
              />
              <h3>자르기</h3>
              <div
                onClick={() => setPageNum(3)}
                style={{ color: 'blue', fontSize: '19px' }}
              >
                다음
              </div>
            </ModalHead2>
            <Item>
              <img
                src={imageSrc}
                alt="selectImg"
                style={{ height: '100%' }}
              ></img>
            </Item>
          </>
        ) : pageNum == 1 ? (
          <>
            <ModalHead>
              <h3>새 게시물 만들기</h3>
            </ModalHead>
            <Item>
              <ImImages
                size="6rem"
                style={{ display: 'block', height: '100%' }}
              />
              <p>사진과 동영상을 여기에 끌어다 놓으세요</p>
              <input
                type="file"
                onChange={(e) => {
                  encodeFileToBase64(e);
                }}
              ></input>
            </Item>
          </>
        ) : (
          <>
            <ModalHead2>
              <BiArrowBack
                onClick={() => {
                  setPageNum(2);
                }}
              />
              <h3>새 게시물 만들기</h3>
              <button>공유하기</button>
            </ModalHead2>
            <hr />
            <Items>
              <img
                src={imageSrc}
                alt="selectImg"
                style={{ width: '100%' }}
              ></img>
              <WritePost>
                <input type="text"></input>
              </WritePost>
            </Items>
          </>
        )}
      </ModalItem>
    </ModalContainer>
  );
};
function mapStateToProps(state: any, ownProps: any) {
  console.log(state);
  return {
    isModalOpen: state.modalReducer,
  };
}

export default connect(mapStateToProps)(Modal);

const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;
const ModalItem = styled(motion.div)`
  width: 500px;
  height: 500px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;
const ModalHead = styled.div`
  display: flex;
  justify-content: center;
  width: 450px;
  align-items: center;
  padding: 20px;
`;
const ModalHead2 = styled(ModalHead)`
  justify-content: space-between;
`;
const Item = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const Items = styled(Item)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const CloseContainer = styled.div`
  position: absolute;
  top: 5%;
  right: 10%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

const WritePost = styled.div``;
