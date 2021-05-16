import React from "react";
import * as S from "./style";

export interface Props {
  // content or element
  children: React.ReactElement | string;
  // button styling type
  styletype?: string;
  // routing
  to?: string;
  // disabled or not
  disabled?: boolean;
  // external link
  href?: string;
  // fit to size enable
  fit?: boolean;
  // flex grow enable
  grow?: boolean;
  // click handler
  onClick?: () => void;
}

function Btn({
  children,
  styletype = "black",
  to,
  href,
  disabled,
  fit = false,
  grow = false,
  ...props
}: Props): React.ReactElement {
  if (to) {
    return (
      <S.StyledLink
        styletype={styletype}
        to={to}
        fit={fit}
        grow={grow}
        {...props}
      >
        {children}
      </S.StyledLink>
    );
  } else if (href) {
    return (
      <S.Anchor
        styletype={styletype}
        href={href}
        fit={fit}
        grow={grow}
        {...props}
      >
        {children}
      </S.Anchor>
    );
  }
  return (
    <S.StyledBtn
      styletype={styletype}
      disabled={disabled}
      fit={fit}
      grow={grow}
      {...props}
    >
      {children}
    </S.StyledBtn>
  );
}

export default Btn;
