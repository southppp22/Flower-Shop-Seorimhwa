import styled from "styled-components";
import { palette, theme } from "styled-tools";
import clearfix from "../../../common/style/mixin/clearfix";

export const Container1 = styled.div`
  width: 100%;
  padding: 2rem 0;
  position: relative;
`;

export const Container = styled.div`
  ${theme("fontStyle.body3")};
  width: 95%;
  display: flex;
`;

export const ImageWrapper = styled.div`
  width: 10rem;
  height: 10rem;
`;

export const InfoConatiner = styled.div`
  display: flex;
  flex: 3 0 20rem;
  max-width: 100%;
`;

export const ItemDetailContainer = styled.div`
  margin-left: 1rem;
`;
export const TitleWrapper = styled.div``;
export const OptionWrapper = styled.span`
  flex-grow: 1;
  display: inline-block;
  color: ${palette("grayscale", 3)};
  cursor: pointer;
  font-weight: 400;
  ${clearfix}

  &:hover {
    color: ${palette("grayscale", 2)};
  }
`;
export const PriceWrapper = styled.span`
  flex-grow: 1;
  display: inline-block;
  margin-right: 1rem;
  font-weight: 400;
  text-align: right;
  ${clearfix}
`;
export const QuantityWrapper = styled.div`
  ${theme("fontStyle.body1")};
`;

export const DeleteBtn = styled.label`
  position: absolute;
  top: 3rem;
  right: 0;
  width: 3rem;
  height: 3rem;
  text-align: center;
  cursor: pointer;
`;

export const DeleteIcon = styled.span`
  &,
  &::before,
  &::after {
    width: 1.8rem;
    height: 2px;
    display: inline-block;
    background-color: ${palette("grayscale", 3)};
  }

  & {
    background-color: transparent;
  }

  &:hover {
    &::before,
    &::after {
      background-color: ${palette("grayscale", 2)};
    }
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
  }

  &::before {
    transform: rotate(135deg);
  }

  &::after {
    transform: rotate(-135deg);
  }
`;
