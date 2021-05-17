import React from "react";
import * as S from "./style";

export interface Props {
  disabled?: boolean;
  placeholder: string;
  // normal || success || error || alert
  state?: string;
}

function Textarea({
  disabled = false,
  placeholder,
  state = "normal",
}: Props): React.ReactElement {
  return (
    <S.Textarea placeholder={placeholder} disabled={disabled} state={state} />
  );
}

export default Textarea;
