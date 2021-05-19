import styled from "styled-components";
import { palette, theme, ifProp } from "styled-tools";

interface InputProps {
  invalid?: boolean;
}

export const Input = styled.input<InputProps>`
  ${theme(`fontStyle.body2`)};
  height: 4rem;
  width: 100%;
  padding: 0 1rem;

  color: ${palette("grayscale", 2)};
  &::placeholder {
    color: ${palette("grayscale", 4)};
  }

  background-color: ${ifProp(
    "disabled",
    palette("grayscale", 6),
    palette("white")
  )};

  border: 1px solid
    ${ifProp("invalid", palette("red"), palette("grayscale", 4))};
  border-radius: 2px;

  &:focus {
    outline: none;
  }
`;
