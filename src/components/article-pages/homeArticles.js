import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeArticlesWrapper = styled.div`
  margin: 0rem 1rem 1rem 5rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin: 2rem 2rem 1rem 2rem;
    /* width: 80vw; */
  }
`;

export const Article = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 550px) {
    flex-direction: column;
    /* display: inline-block; */
    width: 80vw;
  }
`;

export const Left = styled.div`
  flex: 1;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  flex: 1;

  @media (max-width: 900px) {
    margin: 0.5rem 1rem;
  }
  @media (max-width: 550px) {
    margin: 0.5rem 0.5rem;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 0.25rem;

  @media (max-width: 900px) {
    min-width: 100%;
  }
`;

export const Title = styled.h3`
  font-size: 150%;
  color: #1c5196;

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 900px) {
    font-size: 120%;
  }
`;

export const WidgetWrapper = styled.div`
  flex: 1;
  margin-right: 2rem;

  @media (max-width: 900px) {
    margin: 0;
  }
`;

export const ArticlesWrapper = styled.div`
  flex: 2.5;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LinkR = styled(Link)`
  text-decoration: none;
  color: #1c5196;
`;
export const Loading = styled.div`
  height: 100vh;
  background: white;
`;

export const HeaderText = styled.h2`
  display: block;
  margin: 6rem 0 0rem 5rem;
  text-transform: capitalize;
  color: grey;

  @media (max-width: 900px) {
    margin: 6rem 2rem -2rem 2rem;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 550px) {
    margin: 6rem 0rem -2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
