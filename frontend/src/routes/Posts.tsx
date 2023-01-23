import axios from 'axios';
import styled from 'styled-components';
import { Dummy, IInstagramUser } from '../Dummy';
import { useEffect, useRef } from 'react';
import image from '../images/logos/image1.jpg';
import { AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';
import loading from '../images/logos/loading.gif';
const Posts = () => {
  const scrollEvent = () => {
    console.log('scroll event');
  };
  const makeSpinner = () => {
    const spinner = document.createElement('div');
    const spinnerImage = document.createElement('img');
    spinner.classList.add('loading');
    spinnerImage.setAttribute('src', loading);
    spinnerImage.classList.add('spinner');
    spinner.appendChild(spinnerImage);
    return spinner;
  };
  const makeSkeleton = () => {
    const skeleton = document.createElement('li');
    const skeletonImage = document.createElement('div');
    const skeletonText = document.createElement('p');
    skeleton.classList.add('skeleton');
    skeletonImage.classList.add('skeleton_image');
    skeletonText.classList.add('skeleton_text');
    skeletonText.textContent = '';
    skeleton.appendChild(skeletonImage);
    skeleton.appendChild(skeletonText);
    return skeleton;
  };
  const list = useRef<any[]>([]);
  const items = useRef<any[]>([]);
  const skeletonItems = Array.from(
    { length: items.current.length },
    () => makeSkeleton(),
    console.log('스켈레톤 생성 div!'),
  );
  const spinner = makeSpinner();
  const addSkeleton = () => {
    skeletonItems.forEach((item) => list.current.push(item));
  };
  const removeSkeleton = () => {
    skeletonItems.forEach((item) => list.current.pop());
  };
  const loadingStart = () => {
    addSkeleton();
    list.current.push(spinner);
  };
  const loadinFinish = () => {
    removeSkeleton();
    list.current.filter((item) => item !== spinner);
  };
  const addNewContent = () => {
    items.current.forEach((item) => list.current.push(item));
  };

  return (
    <PostContainer>
      <CardList ref={list}>
        <Card ref={(element) => (items.current[0] = element)}>
          <InfoContainer>
            <Logo src={image}></Logo>
            <div>song hee</div>
          </InfoContainer>
          <CardImg src="https://placeimg.com/500/500"></CardImg>
          <CardContext>
            <Icons>
              <AiOutlineHeart size="30px" />
              <AiOutlineMessage size="30px" />
            </Icons>
            <Great>
              <p>좋아요</p>
              <p>
                <span>v.thvnineteen</span> Matching with the electric car. The
                day ...더보기
              </p>
            </Great>
            <Comment>
              <p>37개 댓글 모두 보기</p>
              <hr />
              <p>
                <span>댓글달기</span>
                <button>게시</button>
              </p>
            </Comment>
          </CardContext>
        </Card>
        <Card ref={(element) => (items.current[1] = element)}>
          <InfoContainer>
            <Logo src={image}></Logo>
            <div>song hee</div>
          </InfoContainer>
          <CardImg src="https://placeimg.com/500/500"></CardImg>
          <CardContext>
            <Icons>
              <AiOutlineHeart size="30px" />
              <AiOutlineMessage size="30px" />
            </Icons>
            <Great>
              <p>좋아요</p>
              <p>
                <span>v.thvnineteen</span> Matching with the electric car. The
                day ...더보기
              </p>
            </Great>
            <Comment>
              <p>37개 댓글 모두 보기</p>
              <hr />
              <p>
                <span>댓글달기</span>
                <button>게시</button>
              </p>
            </Comment>
          </CardContext>
        </Card>
        <Card ref={(element) => (items.current[2] = element)}>
          <InfoContainer>
            <Logo src={image}></Logo>
            <div>song hee</div>
          </InfoContainer>
          <CardImg src="https://placeimg.com/500/500"></CardImg>
          <CardContext>
            <Icons>
              <AiOutlineHeart size="30px" />
              <AiOutlineMessage size="30px" />
            </Icons>
            <Great>
              <p>좋아요</p>
              <p>
                <span>v.thvnineteen</span> Matching with the electric car. The
                day ...더보기
              </p>
            </Great>
            <Comment>
              <p>37개 댓글 모두 보기</p>
              <hr />
              <p>
                <span>댓글달기</span>
                <button>게시</button>
              </p>
            </Comment>
          </CardContext>
        </Card>
        <Card ref={(element) => (items.current[3] = element)}>
          <InfoContainer>
            <Logo src={image}></Logo>
            <div>song hee</div>
          </InfoContainer>
          <CardImg src="https://placeimg.com/500/500"></CardImg>
          <CardContext>
            <Icons>
              <AiOutlineHeart size="30px" />
              <AiOutlineMessage size="30px" />
            </Icons>
            <Great>
              <p>좋아요</p>
              <p>
                <span>v.thvnineteen</span> Matching with the electric car. The
                day ...더보기
              </p>
            </Great>
            <Comment>
              <p>37개 댓글 모두 보기</p>
              <hr />
              <p>
                <span>댓글달기</span>
                <button>게시</button>
              </p>
            </Comment>
          </CardContext>
        </Card>
        <Card ref={(element) => (items.current[4] = element)}>
          <InfoContainer>
            <Logo src={image}></Logo>
            <div>song hee</div>
          </InfoContainer>
          <CardImg src="https://placeimg.com/500/500"></CardImg>
          <CardContext>
            <Icons>
              <AiOutlineHeart size="30px" />
              <AiOutlineMessage size="30px" />
            </Icons>
            <Great>
              <p>좋아요</p>
              <p>
                <span>v.thvnineteen</span> Matching with the electric car. The
                day ...더보기
              </p>
            </Great>
            <Comment>
              <p>37개 댓글 모두 보기</p>
              <hr />
              <p>
                <span>댓글달기</span>
                <button>게시</button>
              </p>
            </Comment>
          </CardContext>
        </Card>
        <Card ref={(element) => (items.current[5] = element)}>
          <InfoContainer>
            <Logo src={image}></Logo>
            <div>song hee</div>
          </InfoContainer>
          <CardImg src="https://placeimg.com/500/500"></CardImg>
          <CardContext>
            <Icons>
              <AiOutlineHeart size="30px" />
              <AiOutlineMessage size="30px" />
            </Icons>
            <Great>
              <p>좋아요</p>
              <p>
                <span>v.thvnineteen</span> Matching with the electric car. The
                day ...더보기
              </p>
            </Great>
            <Comment>
              <p>37개 댓글 모두 보기</p>
              <hr />
              <p>
                <span>댓글달기</span>
                <button>게시</button>
              </p>
            </Comment>
          </CardContext>
        </Card>
        <Card ref={(element) => (items.current[6] = element)}>
          <InfoContainer>
            <Logo src={image}></Logo>
            <div>song hee</div>
          </InfoContainer>
          <CardImg src="https://placeimg.com/500/500"></CardImg>
          <CardContext>
            <Icons>
              <AiOutlineHeart size="30px" />
              <AiOutlineMessage size="30px" />
            </Icons>
            <Great>
              <p>좋아요</p>
              <p>
                <span>v.thvnineteen</span> Matching with the electric car. The
                day ...더보기
              </p>
            </Great>
            <Comment>
              <p>37개 댓글 모두 보기</p>
              <hr />
              <p>
                <span>댓글달기</span>
                <button>게시</button>
              </p>
            </Comment>
          </CardContext>
        </Card>
        <Card ref={(element) => (items.current[7] = element)}>
          <InfoContainer>
            <Logo src={image}></Logo>
            <div>song hee</div>
          </InfoContainer>
          <CardImg src="https://placeimg.com/500/500"></CardImg>
          <CardContext>
            <Icons>
              <AiOutlineHeart size="30px" />
              <AiOutlineMessage size="30px" />
            </Icons>
            <Great>
              <p>좋아요</p>
              <p>
                <span>v.thvnineteen</span> Matching with the electric car. The
                day ...더보기
              </p>
            </Great>
            <Comment>
              <p>37개 댓글 모두 보기</p>
              <hr />
              <p>
                <span>댓글달기</span>
                <button>게시</button>
              </p>
            </Comment>
          </CardContext>
        </Card>
      </CardList>
    </PostContainer>
  );
};
export default Posts;

const PostContainer = styled.div`
  width: 55%;
  height: 100%;
`;
const CardList = styled.ul``;
const Card = styled.li`
  background-color: white;
  height: 1000px;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
`;
const Skeleton = styled(Card)``;
const CardImg = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;
const CardContext = styled.div`
  width: 100%;
  padding: 10px 20px;
`;
const Icons = styled.div``;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
const Logo = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50px;
  margin: 10px 20px;
`;
const Great = styled.div``;
const Comment = styled.div``;
