import styled from "styled-components";

export const Conatiner = styled.div`
  width: 20rem;
`;

export const RadioWrapper = styled.div`
  display: inline-block;
  width: 49%;
  position: relative;
  padding-left: 4rem;
`;

export const RadioBtn = styled.span`
  width: 2.6rem;
  height: 2.6rem;
  position: absolute;
  top: -0.4rem;
  left: 0;
  border: 2px solid #ccc;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;

  &::before {
    content: "";
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ccc;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.2s;
  }
`;

export const Radio = styled.input`
  display: none;

  &:checked {
    & ~ ${RadioBtn}::before {
      opacity: 1;
    }
  }
`;
