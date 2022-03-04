import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 1.5rem;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem;
  background: #eef2f5;

  @media (max-width: 900px) {
    padding: 2rem;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 670px) {
    flex-direction: column;
  }
`;
export const Navigation = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 670px) {
    justify-content: center;
  }
`;

export const NavLink = styled.a`
  margin-right: 2rem;
  text-decoration: none;
  font-weight: bold;
  color: #1c5196;
`;

export const Side = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  line-height: 180%;

  @media (max-width: 670px) {
    align-items: center;
  }
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 2rem;
  line-height: 180%;

  @media (max-width: 670px) {
    border: 0px;
    padding: 0;
    margin: 2rem 0 2rem 0;
    align-items: center;
  }
`;

export const AdditionalSection = styled.div`
  margin-top: 1rem;
`;

export const Header = styled.h3``;

export const Content = styled.h3`
  font-size: 2rem;
  color: #1c5196;
  font-weight: 400;

  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`;
export const Content2 = styled.p`
  line-height: 140%;
`;
