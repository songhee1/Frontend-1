import styled from 'styled-components';
import { Dummy, IInstagramUser } from '../Dummy';
import image from '../images/image1.jpg';
const Posts = () => {
  return (
    <PostContainer>
      <Post>
        {Dummy.map((value) => (
          <WriteContainer key={value.id}>
            <img
              src={image}
              style={{
                width: '50px',
                borderRadius: '50px',
                margin: '10px 20px',
              }}
            />
            <div>
              <div>{value.userName}</div>
            </div>

            <div> 좋아요 {value.likeNum} 개</div>
          </WriteContainer>
        ))}
      </Post>
    </PostContainer>
  );
};
export default Posts;

const PostContainer = styled.div`
  width: 55%;
  height: 100%;
`;
const Post = styled.div``;
const WriteContainer = styled.div`
  background-color: white;
  height: 600px;
  margin: 20px 0px;
`;
