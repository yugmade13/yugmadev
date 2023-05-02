import React from 'react';
import styled from 'styled-components';
import Paragraph from './styled/Paragraph';

const Wrapper = styled.footer`
  background: ${(props) => props.theme.colors.bgSecondary};
  padding: 24px 0;
  border-top: ${(props) => props.theme.border};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return (
    <Wrapper>
      <Paragraph style={{ textAlign: 'center' }}>
        <strong>Yugma Dewangga</strong>
        <br />
        Front End Web Developer • 2023
      </Paragraph>
    </Wrapper>
  );
}

export default Footer;
