import styled from "styled-components";
import { palette, theme } from "styled-tools";
import absCenter from "../../../common/style/mixin/absCenter";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const MinusBtn = styled.label`
  position: absolute;
  top: -5px;
  left: 0;
  width: 3rem;
  height: 3rem;
  text-align: center;
  cursor: pointer;
  background-color: ${palette("grayscale", 4)};
  border-radius: 50%;
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

export const PlusBtn = styled.label`
  position: absolute;
  right: 0;
  top: -5px;
  width: 3rem;
  height: 3rem;
  text-align: center;
  cursor: pointer;
  background-color: ${palette("grayscale", 4)};
  border-radius: 50%;
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
