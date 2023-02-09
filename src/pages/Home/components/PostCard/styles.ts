import styled from "styled-components";

export const PostContainer = styled.section`
  margin: 3rem 0 15.1875rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
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
  }

  @media (max-width: 900px) {
    width: 20rem;
  }
`;

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  strong {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-title"]};
  }

  span {
    line-height: 1.6;

    white-space: nowrap;
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
