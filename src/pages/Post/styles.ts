import styled from "styled-components";

export const PostContainer = styled.main`
  max-width: 54rem;
  margin: 0 auto;

  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;
export const PostContent = styled.section`
  padding: 2.5rem 2rem;
  width: 100%;

  blockquote {
    display: flex;
    flex-direction: column;
    line-height: 1.6;
    gap: 0.5rem;
    text-align: justify;
    img {
      width: 100%;
    }

    p {
      line-height: 1.6;
      white-space: pre-wrap;
    }
  }
`;
