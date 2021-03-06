import React from 'react';

import * as S from './style';

export interface Props {
  /** 접근성 대응 */
  alt: string;
  /** 크기 */
  height?: string;
  /** 아이콘 소스 */
  src: string;
}

function Icon({ height = '5rem', ...props }: Props): React.ReactElement {
  return <S.Img height={height} {...props} />;
}

export default Icon;