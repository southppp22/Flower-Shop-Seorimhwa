import styled from "styled-components";
import { palette } from "styled-tools";

export const Select = styled.div`
  /* border: 3px solid blue; */
  width: 40rem;
  height: 5rem;
  padding-left: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectBox = styled.select`
  border: 1px solid ${palette("grayscale", 2)};
  border-radius: 0.5rem;
  padding: 2px 5px;
  width: 80%;
  height: 3rem;
  text-align: center;
  color: ${palette("grayscale", 3)};
  &:focus {
    border: 1px solid ${palette("lightOrange")};
  }
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  ::-ms-expand {
    display: none;
  }
  background: url("https://firebasestorage.googleapis.com/v0/b/seorimhwa-project.appspot.com/o/arrow.svg?alt=media&token=8d83aec6-d1b7-43bd-b92b-d8e94a6b31d8")
    97% center no-repeat;
  background-size: 2.4rem;
`;

export const Option = styled.option`
  font-size: 1.4rem;
  color: "red";
  border: 3px solid ${palette("lightOrange")};
`;
