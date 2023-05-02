import styled from 'styled-components';

const Button = styled.button`
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  background: ${(props) => props.bgColor && props.theme.colors.blue};
  color: ${(props) => props.color || props.theme.colors.textPrimary};
  border-radius: ${(props) => props.borderRadius};
`;

Button.defaultProps = {
  fontSize: '16px',
  borderRadius: '25px',
};

export default Button;
