import React from "react";
import * as S from "./style";

export interface Props {
  name: string;
  placeholder?: string;
  invalid?: boolean;
  disabled?: boolean;
  onChange?: (E: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ ...props }: Props): React.ReactElement {
  return <S.Input {...props} autoComplete="off" />;
}

export default Input;
