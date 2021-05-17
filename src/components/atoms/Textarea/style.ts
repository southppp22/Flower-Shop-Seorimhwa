import styled from "styled-components";
import { ifProp, palette, theme } from "styled-tools";

interface TextareaProps {
  disabled: boolean;
  placeholder: string;
  //success || error || alert
  state: string;
}

export const Textarea = styled.textarea<TextareaProps>`
  &,
  &::placeholder {
    ${theme("fontStyle.textarea")}
  }
  width: 100%;
  height: 100%;
  resize: none;
  line-break: auto;
  outline: none;
  padding: 1rem;
  background-color: ${ifProp("disabled", palette("grayscale", 6))};
  border-color: ${(props) =>
    props.state === "success"
      ? palette("green")
      : props.state === "error"
      ? palette("red")
      : props.state === "alert"
      ? palette("orange")
      : "black"};

  &::-webkit-scrollbar {
    width: 1.2rem;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(${palette("black")} 0.1);
    background-color: ${palette("gray")};
  }
`;
