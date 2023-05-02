import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavigateLink from './NavigateLink';
import Article from './styled/Article';
import Heading3 from './styled/Heading3';
import Paragraph from './styled/Paragraph';
import Image from './Image';
import device from '../styles/Breakpoints';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (${device.sm}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

function ProjectItem({ project }) {
  const {
    title,
    body,
    image,
    source,
  } = project;

  return (
    <Article margin="0 0 24px">
      <Item>
        <div style={{ flex: '1' }}>
          <Heading3 aria-label="project-heading3">
            {title}
          </Heading3>
          <Paragraph aria-label="project-paragraph">
            {body}
          </Paragraph>
          <NavigateLink url={source.url}>
            {source.name}
          </NavigateLink>
        </div>
        <Image src={image} alt="images" />
      </Item>
    </Article>
  );
}

ProjectItem.propTypes = {
  project: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProjectItem;
