import styled from "styled-components";

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
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`

export const TextBox = styled.div`
  /* border: 3px solid red; */
  width: 40rem;
  text-align: center;
  font-size: 1.8rem;
  line-height: 2rem;
  margin-bottom: 2rem;
`;
