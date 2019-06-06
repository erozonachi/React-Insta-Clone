import styled from 'styled-components';

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: .5em;
  background-color: #ffffff;
  justify-content: flex-start;
  align-items: flex-start;

  > ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: .5em;
    > li {
      margin-bottom: .5em;
      > span {
        font-weight: bold;
      }
    }
  }

  > span {
    margin: .5em;
    color: #bbb;
  }
`;

export default CommentContainer;
