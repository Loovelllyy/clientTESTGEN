import React from 'react';
import {FormControlLabel} from "@mui/material";
import Radio from "@mui/material/Radio";

interface TProps {
	valAnswer: string;
	answerVar: string;
}

const AnswerVar = ({answerVar, valAnswer}: TProps) => {
	return (
		<FormControlLabel value={valAnswer} control={<Radio />} label={answerVar}  />
	);
};

export default AnswerVar;
