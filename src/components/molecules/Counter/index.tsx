import React, { useState } from "react";

import * as S from "./style";

//상위 컨테이너 div 크기에 따라 너비 변함
function Counter(): React.ReactElement {
  const [count, setCount] = useState(0);

  const dec = () => {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <S.Container>
      <S.MinusBtn onClick={dec}>
        <S.MinusIcon />
      </S.MinusBtn>
      <S.Value>{count}</S.Value>
      <S.PlusBtn onClick={() => setCount(count + 1)}>
        <S.PlusIcon />
      </S.PlusBtn>
    </S.Container>
  );
}

export default Counter;
