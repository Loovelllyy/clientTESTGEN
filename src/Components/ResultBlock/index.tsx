import React from 'react';

import {IData} from "../ResultList";
import styled from "@emotion/styled";



function ResultBlock({type, num, color, percentage}: IData) {

	const Button = styled.div`
		width: 300px;
	  	height: 70px;
	  	padding: 10px;
	  	box-sizing: border-box;
	  	text-align: center;
	  	line-height: 1.5em;
	  	background: ${color};
	`

	switch (type){
		case 'total':
			return (
				<Button>Результат: {percentage}%</Button>
			);

		case 'correct':
			return (
				<Button>Верно: {num}</Button>
			);

		case 'incorrect':
			return (
				<Button>Неверно: {num}</Button>
			);
	}


}

export default ResultBlock;