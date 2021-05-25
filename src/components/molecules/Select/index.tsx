import React from "react";
import * as S from "./style";
import Label, { Props as LabelProps } from "../../atoms/Label/index";

export interface Props {
  labelProps: LabelProps;
  selectList: any;
}

function Select({ labelProps, selectList }: Props): React.ReactElement {
  return (
    <S.Select>
      <Label {...labelProps} />
      <S.SelectBox defaultValue="default">
        <S.Option value="default" disabled hidden>
          선택해주세요
        </S.Option>
        {selectList.map((ele: any, i: any) => (
          <S.Option key={i} value={ele}>
            {ele}
          </S.Option>
        ))}
      </S.SelectBox>
    </S.Select>
  );
}

export default Select;
