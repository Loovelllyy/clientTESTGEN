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
  background: rgba(146, 162, 157, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  //height: 100%;
  max-width: 1200px;
  padding: 50px;
  box-sizing: border-box;
  align-self: center;
`;

export const wrapperStyle = css`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
  overflow-y: scroll;
`

export const linkStyle = css`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`
