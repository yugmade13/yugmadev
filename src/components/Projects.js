import React from 'react';
import Article from './styled/Article';
import Heading2 from './styled/Heading2';
import ProjectList from './ProjectList';

function Projects() {
  return (
    <Article>
      <Heading2 aria-label="project-heading2">
        Proyek saya
      </Heading2>
      <ProjectList />
    </Article>
  );
}

export default Projects;
