import styled, { css } from "styled-components";
import { ifProp, palette, theme } from "styled-tools";
import { Link } from "react-router-dom";

interface BtnStyleProps {
  styletype: string;
  fit?: boolean;
  grow?: boolean;
}

export const BtnStyle = css<BtnStyleProps>`
  &,
  &:visited,
  &:link {
    ${theme("fontStyle.button")}
    flex-grow: ${ifProp("grow", "1", "0")};
    width: ${ifProp("fit", "fit-content", "18rem")}
    height: ${ifProp("fit", "auto", "4rem")}
    line-height: 1.4rem;
    background-color: ${ifProp("disabled", palette("grayscale", 3), (props) =>
      palette(props.styletype)
    )};
    flex-shrink: 0;
    cursor: ${ifProp("disabled", "default", "pointer")};
    pointer-events: ${ifProp("disabled", "none", "auto")};
    color: ${(props) =>
      props.styletype === "transparent" ||
      props.styletype === "transparent-border" ||
      props.styletype === "transparent-hover"
        ? palette("grayscale", 2)
        : props.styletype === "white"
        ? "black"
        : "white"};
    -webkit-user-drag: none;
    display: inline-block;
    padding: .5rem 2rem;
    border-radius: 0.3rem;
    border-color:
    ${(props) =>
      props.styletype === "transparent-border" || props.styletype === "white"
        ? palette("grayscale", 2)
        : "transparent"};
    outline: none;
    text-align: center;
    user-select: none;
    transition: all ease 0.2s;
    border-style solid;
    border-width: thin;
    text-decoration: none;
  
    &:hover {
      opacity: ${palette("opacityscale", 0)};
      ${(props) => {
        if (props.styletype === "transparent-border") {
          return css`
            background-color: ${palette("grayscale", 2)};
            color: ${palette("grayscale", 6)};
          `;
        } else if (props.styletype === "transparent-hover") {
          return css`
            background-color: ${palette("grayscale", 5)};
          `;
        }
      }}
    }
  }
`;

export const Anchor = styled.a`
  ${BtnStyle}
`;

export const StyledBtn = styled.button`
  ${BtnStyle}
  line-height: 1.4rem + 1px;
`;

export const StyledLink = styled(Link)`
  ${BtnStyle}
`;
