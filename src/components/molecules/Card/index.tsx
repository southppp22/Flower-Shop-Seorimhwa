import React from "react";
import Image from "../../atoms/Image";

import * as S from "./style";

export interface Props {
  to: string;
  imgSrc: string;
  title: string;
  price: string;
}

function Card({ to, imgSrc, title, price }: Props): React.ReactElement {
  return (
    <S.LinkWrapper to={to}>
      <S.ImageWrapper>
        <Image alt={title} src={imgSrc} />
      </S.ImageWrapper>
      <S.ContentContainer>
        <S.TitleWrapper>{title}</S.TitleWrapper>
        <S.PriceWrapper>{price} 원</S.PriceWrapper>
      </S.ContentContainer>
    </S.LinkWrapper>
  );
}

export default Card;
