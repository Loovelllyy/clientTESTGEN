import React from 'react';
import style from "../../PopUpBox/style.module.css";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {PATHclient, PATHreq} from "../../../URLs";
import {css} from "@emotion/react";

interface IProps {
	exit: () => void
}

function ExitPopUp({exit}: IProps) {

	const goHome = useNavigate();

	const exitAdmin = () => {
		axios.get(PATHreq.deleteCookie).then(d => {
			goHome(PATHclient.HomePage);
		})
	}

	return (
		<>
			<p>Вы действительно хотите выйти?</p>
			<Button color='secondary' onClick={exitAdmin}>Да, хочу выйти</Button>
			<Button color='secondary' css={css`border: 1px solid #2e4f47`} onClick={exit}>Нет, хочу остаться</Button>
		</>
	);
}

export default ExitPopUp;