import styled from 'styled-components';

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.bgPrimary};
  width: 100%;
  max-width: 606px;
  height: 64px;
  margin: 0 auto;
  padding: 0 6px;
`;

export default Navigation;
