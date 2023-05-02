import styled, { css } from 'styled-components';

const WrapIcon = styled.div`
  padding: ${(props) => props.padding};
  transition: all .2s ease-out;
  line-height: 0;
  
  svg {
    font-size: 20px;
  }

  ${(props) => props.hover && css`
    &:hover {
      background: ${props.theme.colors.hoverColor};
      border-radius: 50%;
    }
  `}
`;

WrapIcon.defaultProps = {
  padding: '14px',
};

export default WrapIcon;
