import styled from 'styled-components';

const AddCommentBox = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid #ccc;
  border-bottom: 2px solid #bbb;
  padding: 1em 0;

  > input {
    width: 90%;
  }
  > button {
    font-weight: bold;
    font-size: 2.4rem;
  }
`;

export default AddCommentBox;
