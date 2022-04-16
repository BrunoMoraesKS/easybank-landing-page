import React from "react";
import * as S from "./styles";

interface IIconSectionProps {
  icon: string;
  title: string;
  paragraph: string;
}

const IconSection = ({ title, paragraph, icon }: IIconSectionProps) => {
  return (
    <S.Container>
      <S.Icon src={icon} />
      <S.Title>{title}</S.Title>
      <S.Paragraph>{paragraph}</S.Paragraph>
    </S.Container>
  );
};

export default IconSection;
