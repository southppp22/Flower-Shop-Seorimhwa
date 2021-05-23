import React from "react";
import { Image } from "../../index";

import * as S from "./style";

export interface Props {
  title: string;
  imgSrc: string;
  price: string;
  quantity: number;
  //옵션 변경 모달창
  to: string;
  //click handler
  onClick?: () => void;
}

function OrderItem({
  title,
  imgSrc,
  price,
  quantity,
  to,
  onClick,
}: Props): React.ReactElement {
  return (
    <S.Container>
      <S.InfoConatiner>
        <S.ImageWrapper>
          <Image src={imgSrc} alt={title} />
        </S.ImageWrapper>
        <S.ItemDetailContainer>
          <S.TitleWrapper>{title}</S.TitleWrapper>
          <S.QuantityWrapper>수량: {quantity}</S.QuantityWrapper>
        </S.ItemDetailContainer>
      </S.InfoConatiner>
      <S.OptionWrapper>옵션 변경</S.OptionWrapper>
      <S.PriceWrapper>{price} 원</S.PriceWrapper>
      <S.DeleteBtn onClick={onClick}>
        <S.DeleteIcon>&nbsp;</S.DeleteIcon>
      </S.DeleteBtn>
    </S.Container>
  );
}

export default OrderItem;
