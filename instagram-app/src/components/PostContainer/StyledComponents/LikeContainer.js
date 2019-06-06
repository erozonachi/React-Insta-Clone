import styled from 'styled-components';

const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: .5em 0;
  width: 100%;
  margin-left: 1em;

  > div {
    margin-bottom: .5em;
    > .like-control {
      cursor: pointer;
    }
  }
`;

export default LikeContainer;
