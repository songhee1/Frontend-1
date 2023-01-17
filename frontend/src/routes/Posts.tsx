import styled from 'styled-components';
import { Dummy, IInstagramUser } from '../Dummy';

const Posts = () => {
  const dummy = Dummy;
  return (
    <PostContainer>
      <Post>
        {Dummy.map(
          (value): IInstagramUser => (
            <>
              <span>value.userName</span>
              <span>value.likeNum</span>
            </>
          ),
        )}
      </Post>
    </PostContainer>
  );
};
export default Posts;

const PostContainer = styled.div`
  background-color: white;
  width: 55%;```
  height: 100%;
`;
const Post = styled.div``;
