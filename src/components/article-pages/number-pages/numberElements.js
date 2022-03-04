import styled from "styled-components";

export const LineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Page = styled.p`
  padding: 0.5rem;
  cursor: pointer;
  margin: 0.25rem;

  text-decoration: ${({ activeIndex }) => (activeIndex ? "underline" : "none")};
  font-weight: ${({ activeIndex }) => (activeIndex ? "bold" : "none")};
`;
