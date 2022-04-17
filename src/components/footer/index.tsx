import React from "react";
import * as S from "./styles";
import logo from "../../assets/images/logo-white.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import youtube from "../../assets/images/icon-youtube.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import Button from "../button";

const Footer = () => {
  return (
    <S.Container>
      <S.LogoIconsContainer>
        <S.Logo src={logo} alt='Easybank logo' />

        <S.IconsContainer>
          <S.Icon src={facebook} alt='Facebook' />
          <S.Icon src={youtube} alt='Youtube' />
          <S.Icon src={twitter} alt='Twitter' />
          <S.Icon src={pinterest} alt='Pinterest' />
          <S.Icon src={instagram} alt='Instagram' />
        </S.IconsContainer>
      </S.LogoIconsContainer>

      <S.Ul>
        <S.Li>About Us</S.Li>
        <S.Li>Contact</S.Li>
        <S.Li>Blog</S.Li>
        <S.Li>Careers</S.Li>
        <S.Li>Support</S.Li>
        <S.Li>Privacy Policy</S.Li>
      </S.Ul>

      <S.ButtonCopyrightContainer>
        <Button content='Request Invite' />

        <S.Span>© Easybank. All Rights Reserved</S.Span>
      </S.ButtonCopyrightContainer>
    </S.Container>
  );
};

export default Footer;
