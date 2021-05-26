import React from "react";
import * as S from "./style";

export interface Props {
  name: string;
}

function ListItem({ name }: Props): React.ReactElement {
  return <S.ListItem>{name}</S.ListItem>;
}

export default ListItem;
