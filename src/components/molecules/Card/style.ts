import styled from "styled-components";
import { palette, theme } from "styled-tools";
import { Link } from "react-router-dom";

export const LinkWrapper = styled(Link)`
  color: #000;
  display: inline-block;
  width: 30rem;
  text-decoration: none;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 38rem;
`;

export const ContentContainer = styled.div`
  ${theme("fontStyle.body3")};

  //style1
  display: flex;
  justify-content: space-between;

  //style2
  // margin-top: 5px;
  // line-height: 2rem;
`;

export const PriceWrapper = styled.div``;

export const TitleWrapper = styled.div``;
