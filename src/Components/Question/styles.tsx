import {css} from "@emotion/react";

export const wrapper = css`
  width: 100vw;
  height: 100vh;
  background: var(--bgList);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const style = css`

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  max-width: 1200px;
  padding: 50px;
  box-sizing: border-box;
  align-self: center;
`;

export const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
`

export const button = css`
  height: max-content;
  width: max-content;
  padding: 10px 20px;
`
export const linkStyle = css`
  text-decoration: none;
  width: 100%;
`
