import React from "react";

import * as S from "./style";

export interface Props {
  alt: string;
  src: string;
}

function Image({ alt, src }: Props): React.ReactElement {
  return <S.Image alt={alt} src={src} />;
}

export default Image;
