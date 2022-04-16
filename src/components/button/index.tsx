import React from "react";
import * as S from "./styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
}

const Button = ({ content, ...props }: IButtonProps) => {
  return <S.Container {...props}>{content}</S.Container>;
};

export default Button;
