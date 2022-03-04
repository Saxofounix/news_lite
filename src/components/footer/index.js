import React from "react";
import {
  FooterWrapper,
  Side,
  Middle,
  Header,
  Content,
  Content2,
  InfoSection,
  AdditionalSection,
  Navigation,
  NavLink,
} from "./footerElements";

const Footer = () => {
  return (
    <FooterWrapper>
      <Navigation>
        <NavLink href="#">Contact</NavLink>
        <NavLink href="#">Program</NavLink>
        <NavLink href="#">Careers</NavLink>
      </Navigation>
      <InfoSection>
        <Side>
          <Header>Reach out</Header>
          <Content>ta3@news.com</Content>
        </Side>
        <Middle>
          <Header>Phone</Header>
          <Content>+43344313233</Content>
        </Middle>
        <Side>
          <Header>Tips</Header>
          <Content>tips@news.com</Content>
        </Side>
      </InfoSection>
      <AdditionalSection>
        <Content2>Copyright © 2006 - 2022 TA3 </Content2>
        <Content2>Operated by Created by TRIONYX technologies </Content2>
        <Content2>Operated by DIGMIA</Content2>
      </AdditionalSection>
    </FooterWrapper>
  );
};

export default Footer;
