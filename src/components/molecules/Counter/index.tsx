import React, { useState } from "react";
import { Btn } from "../../index";

import * as S from "./style";

export interface Props {
  grayScaleLevel?: number;
}

//상위 컨테이너 div 크기에 따라 너비 변함
function Counter({ grayScaleLevel = 4 }: Props): React.ReactElement {
  const [count, setCount] = useState(0);

  const dec = () => {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <S.Container>
        <S.BtnWrapper
          onClick={dec}
          position="left"
          grayScaleLevel={grayScaleLevel}
        >
          <Btn styletype="transparent" fit={true} grow={true}>
            <S.MinusIcon />
          </Btn>
        </S.BtnWrapper>
        <S.Value>{count}</S.Value>
        <S.BtnWrapper
          onClick={() => setCount(count + 1)}
          position="right"
          grayScaleLevel={grayScaleLevel}
        >
          <Btn styletype="transparent" fit={true} grow={true}>
            <S.PlusIcon />
          </Btn>
        </S.BtnWrapper>
      </S.Container>
    </>
  );
}

export default Counter;
