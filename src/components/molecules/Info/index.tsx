import React from "react";
import * as S from "./style";
import Btn, { Props as BtnProps } from '../../atoms/Btn/index';

export interface Props {
  btnProps: BtnProps;
  bgImgSource?: string;
  contents?: string;
  title?: string;
}

function Info({
  btnProps,
  bgImgSource,
  contents,
  title
}: Props): React.ReactElement {
  return (
    <S.InfoBox bgImgSource={bgImgSource} >
      <S.Title>{title}</S.Title>
      <S.TextBox>{contents}</S.TextBox>
      <Btn {...btnProps} />
    </S.InfoBox>
  )
}

export default Info;
