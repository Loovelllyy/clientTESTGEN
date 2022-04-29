import React from "react";
import Test from "../Test";
import {css} from "@emotion/react"

interface ITest {
	id: number,
	nameTest: string,
}

interface IProps {
	data: ITest[],
	admin: boolean
}

const TestList = ({data, admin}: IProps) => {

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
			{data.map(el => <Test key={el.id} nameTest={el.nameTest} id={el.id} admin={admin} />)}
		</div>
	)
}

export default TestList;