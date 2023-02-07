import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  form {
    margin-top: 4.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    div {
      display: flex;
      justify-content: space-between;

      strong {
        font-size: 1.125rem;
        font-weight: 700;
        color: ${(props) => props.theme["base-subtitle"]};
      }

      span {
        font-size: 0.875rem;
        color: ${(props) => props.theme["base-span"]};
      }
    }

    input[type="text"] {
      height: 3.125rem;
      border: 1px solid ${(props) => props.theme["base-border"]};
      padding: 0.75rem 1rem;
      background-color: ${(props) => props.theme["base-input"]};
      border-radius: 6px;
      color: ${(props) => props.theme["base-text"]};
      ::placeholder {
        color: ${(props) => props.theme["base-label"]};
      }
    }
  }
`;
