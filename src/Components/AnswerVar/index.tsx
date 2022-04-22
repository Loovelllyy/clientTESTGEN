import React from 'react';
import {FormControlLabel} from "@mui/material";
import Radio from "@mui/material/Radio";

import { s } from '../Question'

interface TProps {
	valAnswer: string;
	answerVar: string;
}

const AnswerVar = ({answerVar, valAnswer }: TProps) => {
	return (
		<FormControlLabel css={ s } value={valAnswer} control={<Radio />} label={answerVar}  />
	);
};

export default AnswerVar;
