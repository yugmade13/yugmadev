import styled from 'styled-components';

const Article = styled.div`
  margin: ${(props) => props.margin};
`;

Article.defaultProps = {
  margin: '24px 0',
};

export default Article;
