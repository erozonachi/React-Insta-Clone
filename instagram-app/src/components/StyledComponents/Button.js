import Styled from 'styled-components';

const Button = Styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.flat? 'inherit' : 'rgb(9, 124, 139, .7)'};
`;

export default Button;
