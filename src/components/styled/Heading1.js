import styled from 'styled-components';

const Heading1 = styled.h1`
  font-size: 24px;
  color: ${(props) => props.theme.colors.textPrimary};
  line-height: 32px;
  margin-bottom: 12px;
`;

export default Heading1;
