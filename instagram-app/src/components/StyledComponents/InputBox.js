import styled from 'styled-components';

const InputBox = styled.input`
  outline: none;
  padding: ${(props) => props.flat? '0' : '.5em 0'};
  border: ${(props) => props.flat? 'none' : '1px solid #aaa'};
  background-color: ${(props) => props.flat? 'inherit' : '#eee'};
  text-align: ${(props) => props.flat? 'auto' : 'center'};
`;

export default InputBox;
