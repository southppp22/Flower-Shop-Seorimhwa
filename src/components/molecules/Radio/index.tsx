import React from "react";
import * as S from "./style";

import { Label } from "../../index";

export interface Props {
  name: string;
}

function Radio({ name }: Props): React.ReactElement {
  return (
    <div>
      <S.Conatiner>
        <S.RadioWrapper>
          <Label>
            test
            <S.Radio type="radio" name={name}></S.Radio>
            <S.RadioBtn></S.RadioBtn>
          </Label>
        </S.RadioWrapper>
        <S.RadioWrapper>
          <Label>
            test
            <S.Radio type="radio" name={name}></S.Radio>
            <S.RadioBtn></S.RadioBtn>
          </Label>
        </S.RadioWrapper>
      </S.Conatiner>
    </div>
  );
}

export default Radio;
