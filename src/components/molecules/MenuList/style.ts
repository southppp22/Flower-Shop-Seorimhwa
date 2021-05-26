import styled from "styled-components";
import { theme } from "styled-tools";

export const Container = styled.div`
  width: 20rem;
  padding: 1rem;
`;

export const Title = styled.div`
  ${theme("fontStyle.body3")};
  margin-bottom: 2rem;
`;

export const List = styled.ul`
  list-style: none;
  li {
    margin-bottom: 0.5rem;
  }
`;
