import styled from "styled-components";
import { palette, theme } from "styled-tools";

export const ListItem = styled.li`
  ${theme("fontStyle.body1")};
  color: ${palette("grayscale", 1)};
  list-style: none;
`;
