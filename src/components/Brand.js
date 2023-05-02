import React from 'react';
import styled from 'styled-components';
import brand from '../utils/brand';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: ${(props) => props.theme.colors.bgSecondary};
  border-radius: 25px;
  margin-top: 24px;
`;

const Item = styled.li`
  position: relative;
  padding: 16px;
  font-size: 24px;
  line-height: 0;
  color: ${(props) => props.theme.colors.textPrimary};
  
  &:hover {
    > span {
      opacity: 1;
    }
  }
`;

const PopItem = styled.span`
  opacity: 0;
  position: absolute;
  top: -15px;
  left: 0;
  padding: 12px;
  font-size: 12px;
  border-radius: 25px;
  background: ${(props) => props.theme.colors.hoverColor};
  transition: opacity .3s ease-out;
`;

function Brand() {
  return (
    <List>
      {brand.map(({ title, image }) => (
        <Item key={title}>
          {image}
          <PopItem aria-label="hover">{title}</PopItem>
        </Item>
      ))}
    </List>
  );
}

export default Brand;
