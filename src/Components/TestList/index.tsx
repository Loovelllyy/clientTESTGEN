import React, {useMemo} from "react";
import Test from "../Test";
import {css} from "@emotion/react"

interface ITest {
	id: number,
	nameTest: string,
}

interface IProps {
	data: ITest[],
	admin: boolean,
	isUpdate: () => void,
}

const TestList = React.memo(({data, admin, isUpdate}: IProps) => {

	const testsMemo = useMemo(() => {
		return data.map(el =>
				<Test key={el.id} nameTest={el.nameTest} id={el.id} admin={admin} isUpdate={isUpdate}/>
		)
	}, [data, admin, isUpdate])

	console.log(testsMemo)

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
			{testsMemo.map(test => test)}
		</div>
	)
})

export default TestList;