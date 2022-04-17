import React from "react";
import * as S from "./styles";

interface IIconSectionProps {
  icon: string;
  title: string;
  paragraph: string;
  align?: "left" | "center";
}

const IconSection = ({ title, paragraph, icon, align }: IIconSectionProps) => {
  return (
    <S.Container align={align}>
      <S.Icon src={icon} />
      <S.Title>{title}</S.Title>
      <S.Paragraph>{paragraph}</S.Paragraph>
    </S.Container>
  );
};

export default IconSection;
