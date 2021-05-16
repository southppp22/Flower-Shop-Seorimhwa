import React from "react";
import * as S from "./style";

export interface Props {
  borderWidth?: string;
  grayScaleLevel?: number;
}

function Divider({
  borderWidth = "1px",
  grayScaleLevel = 5,
}: Props): React.ReactElement {
  return (
    <S.Divider borderWidth={borderWidth} grayScaleLevel={grayScaleLevel} />
  );
}

export default Divider;
