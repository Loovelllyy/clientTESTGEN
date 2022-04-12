import React from "react";
import Test from "../Test";
import {css} from "@emotion/react"

const TestList = () => {

	const styleWrapper = css`
      	background: var(--bgList);
	  	overflow-y: auto;
	  	width: 80%;
	  	height: 60%;		
	  	padding: 30px;

      &::-webkit-scrollbar {
        width: 10px;
      }

      &::-webkit-scrollbar-track {
        background: var(--bgList);
      }

      &::-webkit-scrollbar-thumb{
        background: var(--mainColorText);
		border-radius: 5px;
      }
	`;

	return (
		<div css={ styleWrapper }>
			<Test key={1} id={1} nameTest='11111'/>
			<Test key={0} id={0} nameTest='0000000'/>
			{/*<Test/>*/}
			{/*<Test/>*/}
			{/*<Test/>*/}
			{/*<Test/>*/}
			{/*<Test/>*/}
			{/*<Test/>*/}
			{/*<Test/>*/}
			{/*<Test/>*/}
			{/*<Test/>*/}
			{/*<Test/>*/}
		</div>
	)
}

export default TestList;