import React from 'react';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';
import projects from '../utils/projects';

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function ProjectList() {
  return (
    <List>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </List>
  );
}

export default ProjectList;
