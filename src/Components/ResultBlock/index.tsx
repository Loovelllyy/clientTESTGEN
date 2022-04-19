import React from 'react';

import styled from "@emotion/styled";

import { IAllData } from '../ResultList'
import {css} from "@emotion/react";


function ResultBlock({data}: {data: IAllData | {}}) {

	const Block = styled.div`
		width: 300px;
		height: 70px;
		padding: 10px;
		box-sizing: border-box;
		text-align: center;
		line-height: 1.5em;
	`

	return (
		<>
			<Block css={css`background: var(--bgTotal)`}>Результат: {"percentage" in data && data.percentage}%</Block>
			<Block  css={css`background: var(--bgCorrect)`}>Верно: {"correct" in data && data.correct}</Block>
			<Block  css={css`background: var(--bgIncorrect)`}>Неверно: {"incorrect" in data && data.incorrect}</Block>
		</>
	);
}

export default ResultBlock;