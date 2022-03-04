import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroWrapper = styled.div`
  background: #eef2f5;
  display: flex;
  flex-direction: column;
  padding-top: 4.5rem;
  margin-bottom: -5rem;
`;

export const MainNews = styled.div`
  display: flex;
  margin: 1rem 0;
  padding: 0 5rem;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    padding: 0 2rem;
    margin-bottom: 2rem;
  }
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  flex: 1;

  @media (max-width: 900px) {
    justify-content: center;
    width: 100%;
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: right;
  flex: 1;

  @media (max-width: 900px) {
    justify-content: center;
    flex-direction: column;
    min-width: 100%;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 0.25rem;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const SecondaryNews = styled.div`
  display: flex;

  justify-content: center;
  padding: 0 5rem;
  gap: 1.5rem;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    padding: 0 2rem;
  }
`;

export const Secondary = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 40vw;

  @media (max-width: 580px) {
    width: 80vw;
  }
`;

export const Title = styled.h1`
  color: #1c5196;
  font-size: 210%;

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 900px) {
    margin-top: 0.5rem;
  }

  @media (max-width: 580px) {
    font-size: 150%;
  }
`;

export const Title2 = styled.h4`
  color: #1c5196;
  margin-top: 0.5rem;
  padding-bottom: 1rem;

  :hover {
    text-decoration: underline;
  }
`;

export const P = styled.p`
  margin: 1rem 1rem 0 0;
  font-size: 120%;
  line-height: 1.3rem;

  @media (max-width: 900px) {
    display: none;
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
