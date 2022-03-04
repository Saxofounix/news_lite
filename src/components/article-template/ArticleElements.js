import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 8rem 1rem 1rem 5rem;
  display: flex;
  gap: 3.5rem;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
    margin: 8rem 4rem 0 4rem;
  }

  @media (max-width: 600px) {
    margin: 6rem 2rem 0 2rem;
  }
`;

export const ArticleBody = styled.div`
  flex: 2.5;
  max-width: 60vw;

  @media (max-width: 900px) {
    max-width: 100vw;
  }
`;

export const WidgetWrapper = styled.div`
  flex: 1;
  margin-right: 4rem;

  @media (max-width: 900px) {
    margin: 0;
  }
`;
export const Loading = styled.div`
  background: white;
  height: 100vh;
`;
