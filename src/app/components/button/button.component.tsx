import React from "react";
import { FilledButton, OutlinedButton } from "./button.styles";

interface IButtonProps {
  theme: "filled" | "outlined";
  text: string;
}

export function Button(props: IButtonProps) {
  const { theme, text } = props;

  if (theme === "filled") {
    return <FilledButton>{text}</FilledButton>;
  }
  return <OutlinedButton>{text}</OutlinedButton>;
}
