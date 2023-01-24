import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import image from '../images/logos/image1.jpg';
import { AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';
import loading from '../images/logos/loading.gif';
const Posts = () => {
  const API_KEY = 'hWIO-ETKuGA7ig29f6Mi3LRtezeOBWma-7iNphRyLM4';
  const [pageNum, setPageNum] = useState(1);
  const [photos, setPhotos] = useState<any[]>([]);
  const [load, setLoad] = useState(false);
  const photoRequest = () => {
    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=${API_KEY}&page=${pageNum}&per_page=5`,
      )
      .then((res) => {
        setPhotos((prev) => [...prev, ...res.data]);
        setLoad((prev) => !prev);
      });
  };
  const bottom = useRef<any>(undefined);
  useEffect(() => {
    photoRequest();
  }, [pageNum]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPageNum((prev) => prev + 1);
          }
        });
      },
      { threshold: 1 },
    );
    observer.observe(bottom.current);
  }, [loading]);
  return (
    <PostContainer>
      <CardList>
        {JSON.stringify(photos) === JSON.stringify([]) ? (
          <>
            <Skeleton>
              <SkeletonImg />
            </Skeleton>
          </>
        ) : (
          photos.map((photo, index) => (
            <Card key={index}>
              <InfoContainer>
                <Logo src={image}></Logo>
                <div>song hee</div>
              </InfoContainer>
              <CardImg src={photo.urls.small}></CardImg>
              <CardContext>
                <Icons>
                  <AiOutlineHeart size="30px" />
                  <AiOutlineMessage size="30px" />
                </Icons>
                <Great>
                  <p>좋아요</p>
                  <p>
                    <span>v.thvnineteen</span> Matching with the electric car.
                    The day ...더보기
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
          ))
        )}
        <Spinner src={loading} ref={bottom} />
      </CardList>
    </PostContainer>
  );
};
export default Posts;

const PostContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CardList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Card = styled.li`
  background-color: white;
  height: 1000px;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  padding: 20px;
  border-radius: 20px;
`;
const Skeleton = styled(Card)``;
const CardImg = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  height: 500px;
`;
const SkeletonImg = styled.div`
  height: 500px;
  background-color: grey;
  width: 100%;
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
const Spinner = styled.img`
  width: 100px;
`;
