import React from "react";
import * as S from "./style";

export interface Props {
  children: any;
}

function Label({ children }: Props): React.ReactElement {
  return <S.Label>{children}</S.Label>;
}

export default Label;
