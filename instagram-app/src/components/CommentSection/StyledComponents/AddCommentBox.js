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
    outline: none;
    border: none;
    width: 90%;
    background-color: inherit;
  }
  > button {
    outline: none;
    border: none;
    font-weight: bold;
    font-size: 2.4rem;
    background-color: inherit;
    cursor: pointer;
  }
`;

export default AddCommentBox;
