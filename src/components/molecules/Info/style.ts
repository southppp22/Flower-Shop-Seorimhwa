import styled from "styled-components";
import { theme } from "styled-tools";


interface InfoProps {
  bgImgSource?: string;
}

export const InfoBox = styled.div<InfoProps>`
  /* border:3px solid blue; */
  width: 80rem;
  height: 50rem;
  background: url(${props => props.bgImgSource});
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  /* border: 3px solid yellow; */
  ${theme("fontStyle.h3")}
  margin-bottom: 1.5rem;
`

export const TextBox = styled.div`
  /* border: 3px solid red; */
  ${theme("fontStyle.body3")}
  font-weight: 500;
  width: 40rem;
  text-align: center;
  line-height: 2rem;
  margin-bottom: 2rem;
`;
