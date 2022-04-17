import React, { useState } from "react";
import * as S from "./styles";
import logo from "../../assets/images/logo.svg";
import Button from "../button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <S.Container>
      <S.Logo src={logo} alt='Easybank logo' />

      <S.MobileMenu isMenuOpen={isMenuOpen}>
        <S.Content>
          <S.Ul>
            <S.Li>Home</S.Li>
            <S.Li>About</S.Li>
            <S.Li>Contact</S.Li>
            <S.Li>Blog</S.Li>
            <S.Li>Careers</S.Li>
          </S.Ul>
        </S.Content>
      </S.MobileMenu>

      <S.MobileMenuIconContainer onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <S.MobileMenuIcon isMenuOpen={isMenuOpen} />
      </S.MobileMenuIconContainer>

      <S.ButtonContainer>
        <Button content='Request Invite' />
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Header;
