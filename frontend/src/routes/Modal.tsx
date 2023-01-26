import styled from 'styled-components';

import { GrClose } from 'react-icons/gr';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { buttonModal, modalPageNum } from '../atom';
import { ImImages } from 'react-icons/im';
import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';

const Modal = () => {
  const setModal = useSetRecoilState(buttonModal);
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
  const [pageNum, setPageNum] = useRecoilState(modalPageNum);
  return (
    <ModalContainer>
      <CloseContainer onClick={() => setModal((prev) => !prev)}>
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
              />
              <h3>자르기</h3>
              <button onClick={() => setPageNum(3)}>다음</button>
            </ModalHead2>
            <hr />
            <Item>
              <img
                src={imageSrc}
                alt="selectImg"
                style={{ width: '80%' }}
              ></img>
            </Item>
          </>
        ) : pageNum == 1 ? (
          <>
            <ModalHead>
              <h3>새 게시물 만들기</h3>
            </ModalHead>
            <Item>
              <ImImages size="6rem" style={{ display: 'block' }} />
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
                style={{ width: '80%' }}
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
export default Modal;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;
const ModalItem = styled.div`
  position: absolute;
  top: 50;
  right:0;
  left:0;
  width: 40vw;
  height: 400px;
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
  width: 100%;
  border-bottom: 1px solid black;
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
`;
const Items = styled(Item)`
  flex-direction: row;
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
