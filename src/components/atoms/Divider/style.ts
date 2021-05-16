import styled from "styled-components";
import { palette } from "styled-tools";

interface DividerProps {
  borderWidth: string;
  grayScaleLevel: number;
}

export const Divider = styled.hr<DividerProps>`
  border-width: ${(props) => props.borderWidth};
  border-style: solid;
  border-color: ${(props) => palette("grayscale", props.grayScaleLevel)};
`;
