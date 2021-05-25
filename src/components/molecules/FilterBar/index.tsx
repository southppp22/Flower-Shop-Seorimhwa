import React from "react";
import * as S from "./style";

export interface Props {
  itemList: Array<string>;
}

function FilterBar({ itemList }: Props): React.ReactElement {
  return (
    <S.Filter>
      <S.FilterBox>
        {itemList.map((ele, i) => (
          <S.Option key={i} value={ele}>
            {ele}
          </S.Option>
        ))}
      </S.FilterBox>
    </S.Filter>
  );
}

export default FilterBar;
