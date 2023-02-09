import styled from "styled-components";

export const PostInfoContainer = styled.section`
  background-color: ${(props) => props.theme["base-profile"]};
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 10.5rem;
  padding: 2rem;

  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -5.5rem;

  strong {
    margin-top: 1.25rem;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-title"]};
  }

  @media (max-width: 482px) {
    height: 100%;
  }
`;
export const PostInfoHeader = styled.header`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    color: ${(props) => props.theme.blue};
    display: flex;
    gap: 0.5rem;

    text-decoration: none;

    span {
      font-size: 0.75rem;
      line-height: 1.6;
      font-weight: 700;
    }
    svg {
      width: 0.75rem;
    }

    :hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`;
export const PostInfoFooter = styled.footer`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 414px) {
    gap: 0.5rem;
    flex-direction: column;
  }
`;
export const PostInfoFooterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  color: ${(props) => props.theme["base-span"]};
  white-space: nowrap;

  @media (max-width: 414px) {
  }
`;
