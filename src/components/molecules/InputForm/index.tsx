import React from "react";
import * as S from "./style";
import Label, { Props as LabelProps } from "../../atoms/Label/index";
import Input, { Props as InputProps } from "../../atoms/Input/index";

export interface Props {
  labelProps: LabelProps;
  inputProps: InputProps;
}

function InputForm({ labelProps, inputProps }: Props): React.ReactElement {
  return (
    <S.InputForm>
      <Label {...labelProps} />
      <Input {...inputProps} />
    </S.InputForm>
  );
}

export default InputForm;
