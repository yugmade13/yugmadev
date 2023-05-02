import React from 'react';
import styled from 'styled-components';
import Heading1 from '../components/styled/Heading1';
import Heading3 from '../components/styled/Heading3';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

function NotFound() {
  return (
    <section>
      <Wrapper>
        <Heading1>
          Oops..
        </Heading1>
        <Heading3>
          Page not found 💩
        </Heading3>
      </Wrapper>
    </section>
  );
}

export default NotFound;
