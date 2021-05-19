import React from "react";
import * as S from "./style";

export interface Props {
  name: string;
}

function Label({ name }: Props): React.ReactElement {
  return <S.Label>{name}</S.Label>;
}

export default Label;
