import styled from 'styled-components';

const Heading3 = styled.h3`
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.textPrimary};
  line-height: 24px;
  margin-bottom: 12px;
`;

export default Heading3;
