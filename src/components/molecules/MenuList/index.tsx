import React from "react";
import * as S from "./style";
import ListItem from "../../atoms/ListItem";
import Divider from "../../atoms/Divider";

export interface Props {
  title: string;
  menuArr: string[];
}

function MenuList({ title, menuArr }: Props): React.ReactElement {
  return (
    <>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.List>
          {menuArr.map((el, idx) => (
            <ListItem name={el} key={idx} />
          ))}
        </S.List>
        <Divider />
      </S.Container>
    </>
  );
}

export default MenuList;
