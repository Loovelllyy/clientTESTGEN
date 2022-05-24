import React from 'react';
import ReactDOM from "react-dom";
import styles from './styles.module.css'
import LoadPopUp from "../PopUps/LoadPopUp";
import ExitPopUp from "../PopUps/ExitPopUp";
import {Button} from "@mui/material";
import {RiCloseFill} from "react-icons/ri";


interface IProps {
	type: 'exit' | 'load',
	exitPopUp: () => void;
	isUpdate: () => void;
}

function PopUpBoxPortal({exitPopUp, type, isUpdate}: IProps) {

	let currentElm

	switch (type){
		case "exit":
			currentElm = <ExitPopUp />
			break;
		case "load":
			currentElm = <LoadPopUp isUpdate={isUpdate}/>
	}

		return (
			ReactDOM.createPortal(
				<div className={styles.wrapper}>
					<div className={styles.box}>
						<Button sx={{ position: 'absolute' }} color='secondary' onClick={exitPopUp} className={`${styles.btnDel} ${styles.icon}`} ><RiCloseFill /></Button>
						{currentElm}
					</div>
				</div>,
				document.body)
		)
}

export default PopUpBoxPortal;