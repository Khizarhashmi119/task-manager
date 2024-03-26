import styled, { keyframes, css } from "styled-components";

const loaderAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

type Props = { $size?: `${number}px` };

const CircularLoader = styled.div<Props>`
  animation: ${loaderAnimation} 0.5s linear infinite;
  border-top: 3px solid ${(props) => props.theme.colorGreenDark};
  border-left: 3px solid ${(props) => props.theme.colorGreenDark};
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
  border-radius: 100%;

  ${(props) => css`
    height: ${props.$size ?? "40px"};
    width: ${props.$size ?? "40px"};
  `}
`;

export default CircularLoader;
