import React from 'react';

import {css} from "@emotion/react";
import {Button } from "@mui/material";
import {RiCloseFill} from "react-icons/ri";

import { icon, btnDel} from './style'
import Form from "../../HookFormsComponents/Form";

interface IProps {
	exit: () => void;
	isUpdate: () => void
}

function LoadPopUp({exit, isUpdate}: IProps) {

	return (
		<div css={css`position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around`}>
			<p>Выберете файл, который хотите загрузить. Помните, что поддерживается только формат .txt с верным форматированием</p>
			<Button color='secondary' onClick={exit} css={btnDel}><RiCloseFill css={icon}/></Button>
			<Form exit={exit} isUpdate={isUpdate}/>
		</div>
	);
}

export default LoadPopUp;