import React from 'react';
import TestList from '../../Components/TestList';
import {css} from "@emotion/react"

const TestListPage = () => {

	const wrapperStyle = css`
		background: var(--bgMainColor);
	  	display: flex;
	  	flex-direction: column;
	  	align-items: center;
	  	justify-content: center;
	  	height: 100%;
	  	width: 100%;
	`;

	return (
		<div css={ wrapperStyle }>
			<h1>Выберите нужный тест</h1>
			<TestList/>
		</div>
	);
};

export default TestListPage;

