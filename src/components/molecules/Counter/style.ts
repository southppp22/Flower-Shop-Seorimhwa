import styled, { css } from "styled-components";
import { palette, theme } from "styled-tools";
import absCenter from "../../../common/style/mixin/absCenter";

interface BtnProps {
  grayScaleLevel: number;
  position: string;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const MinusIcon = styled.span`
  &,
  &::before {
    width: 2rem;
    height: 2px;
    display: inline-block;
    background-color: ${palette("white")};
  }

  & {
    background-color: transparent;
  }

  &::before {
    content: "";
    ${absCenter};
  }
`;

export const PlusIcon = styled.span`
  &,
  &::before,
  &::after {
    width: 1.5rem;
    height: 2px;
    display: inline-block;
    background-color: ${palette("white")};
  }

  & {
    background-color: transparent;
  }

  &::before {
    content: "";
    ${absCenter};
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;

export const Value = styled.div`
  ${theme("fontStyle.body3")};
  width: 100%;
  padding-left: 3rem;
  padding-right: 3rem;
  text-align: center;

  // 드래그 방지
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const BtnWrapperStyle = css<BtnProps>`
  position: absolute;
  top: -5px;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${(props) => palette("grayscale", props.grayScaleLevel)};
  overflow: hidden;

  //option
  &:hover {
    background-color: ${(props) =>
      palette("grayscale", props.grayScaleLevel - 1)};
  }

  ${(props) => {
    if (props.position === "left") {
      return css`
        left: 0;
      `;
    } else if (props.position === "right") {
      return css`
        right: 0;
      `;
    }
  }}
`;

export const BtnWrapper = styled.div`
  ${BtnWrapperStyle}
`;
