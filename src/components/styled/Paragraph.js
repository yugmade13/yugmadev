import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.theme.colors.textSecondary};
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 8px;
`;

Paragraph.defaultProps = {
  fontSize: '16px',
};

export default Paragraph;
