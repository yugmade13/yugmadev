import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TbArrowUpRight } from 'react-icons/tb';

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.blue};
`;

const Navigate = styled.a`
  color: ${(props) => props.theme.colors.blue};
  text-decoration: underline;
`;

function NavigateLink({ children, url }) {
  return (
    <Wrapper>
      <Navigate aria-label="project-link" href={url} target="_blank">
        {children}
      </Navigate>
      <TbArrowUpRight />
    </Wrapper>
  );
}

NavigateLink.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NavigateLink;
