import styled from "styled-components";
import { palette } from "styled-tools";

export const Filter = styled.div`
  /* border: 3px solid blue; */
  width: 80rem;
  height: 5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
`;

export const FilterBox = styled.select`
  border: 1px solid transparent;
  border-radius: 0.5rem;
  padding-right: 2rem;
  width: 10rem;
  height: 3rem;
  text-align: end;
  color: ${palette("black")};
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  ::-ms-expand {
    display: none;
  }
  background: url("https://firebasestorage.googleapis.com/v0/b/seorimhwa-project.appspot.com/o/sort-down-solid.svg?alt=media&token=dd7f0ef8-0392-45de-8108-724284ce7bcc")
    97% -0.3rem no-repeat;
  background-size: 1.5rem;
`;

export const Option = styled.option`
  font-size: 1.4rem;
`;
