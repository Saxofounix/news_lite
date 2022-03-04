import styled from "styled-components";
import { Link } from "react-router-dom";

export const BreakingNews = styled.div`
  background: #eef2f5;
  padding: 1.5rem;
  border-radius: 0.25rem;
`;
export const Header = styled.h3`
  text-align: center;
`;

export const LinkR = styled(Link)`
  text-decoration: none;
  color: #1c5196;
`;

export const Title = styled.h4`
  margin-top: 1rem;
  :hover {
    text-decoration: underline;
  }
`;
