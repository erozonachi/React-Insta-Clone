import styled from 'styled-components';

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1em 0;

  > img {
    width: 50px;
    border-radius: 50%;
    margin: 0 .5em;
  }

  > span {
    font-weight: bold;
  }
`;

export default PostHeader;
