import styled from "styled-components";

export const ProfileCardContainer = styled.section`
  background-color: ${(props) => props.theme["base-profile"]};
  display: flex;
  gap: 2rem;
  align-items: center;

  width: 54rem;
  height: 13.25rem;

  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -5.5rem;
`;

export const ProfileContent = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ProfileHeader = styled.header`
  display: flex;
  margin-bottom: 0.5rem;
  margin-right: 2rem;

  strong {
    flex: 1;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-title"]};
  }

  a {
    display: flex;
    align-items: center;
    width: 4.1875rem;
    height: 1.1875rem;

    color: ${(props) => props.theme.blue};

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

export const ProfileBioContainer = styled.div`
  margin-bottom: 1.5rem;
  line-height: 1.6;

  p {
    max-width: 38.25rem;
  }
`;
export const ProfileImage = styled.article`
  margin-left: 2.5rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;
export const ProfileFooter = styled.footer`
  display: flex;
  gap: 1.5rem;
`;
export const ProfileFooterContent = styled.div`
  display: flex;
  gap: 0.5rem;
`;
