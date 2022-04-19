import React from 'react';
import withLoader from "../../HOC/withLoader";
import ResultList from "../../Components/ResultList";
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import {Button} from "@mui/material";
import {btnStyle} from "../../../public/style";

export interface IData {
	correct: number,
	incorrect: number,
}

function ResultPage() {

	let data: IData = { correct: 25, incorrect: 15 } // from props

	return(
		<div css={css`
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;
			background: var(--bgList);
		`}>
			<h1 css={css`text-align: center; margin: 0`} >Тест завершён!</h1>
			<ResultList data={data}/>
			<Link to='/home' style={{ textDecorationLine: 'none' }}>
				<Button variant='outlined' sx={ btnStyle }>Назад к тестам</Button>
			</Link>
		</div>
	)
}

const WrappedComponent = withLoader(ResultPage, '')

export default WrappedComponent;