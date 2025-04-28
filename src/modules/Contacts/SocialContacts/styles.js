import { css } from "@emotion/react";

export const findUsStyle = color => css`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 25px;
    height: 205px;
    background-color: ${color};
    
`;

export const textStyle = css`
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 81%;
color: rgba(0, 0, 0, 0.7);
opacity: 0.8;

`;

