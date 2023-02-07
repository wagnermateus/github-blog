import styled from "styled-components";

export const PostContainer = styled.section`
  margin: 3rem 0 15.1875rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;
export const PostContent = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  width: 26rem;
  height: 16.25rem;

  padding: 2rem;

  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 10px;

  &:hover {
    border: 2px solid ${(props) => props.theme["base-label"]};
    cursor: pointer;
  }

  blockquote {
  }
`;

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;

  strong {
    max-width: 17.6875rem;

    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-title"]};
  }

  span {
    display: inline-block;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const MarkdownText = styled.div`
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
