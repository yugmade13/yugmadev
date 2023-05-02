import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import device from '../styles/Breakpoints';

const WrapImage = styled.div`
  margin: 12px 0;
  border-radius: 25px;
  
  @media (${device.sm}) {
    width: 145px;
    height: 145px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

function Image({ src, alt }) {
  return (
    <WrapImage>
      <Img aria-label="project-image" src={src} alt={alt} />
    </WrapImage>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
