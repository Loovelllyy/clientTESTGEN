import React from 'react';
import ReactDOM from "react-dom";
import style from './style.module.css'
import LoadPopUp from "../PopUps/LoadPopUp";
import ExitPopUp from "../PopUps/ExitPopUp";


interface IProps {
	type: 'exit' | 'load' | '',
	exit: () => void;
	isUpdate: () => void;
	isOpen: boolean;
}

function PopUpBoxPortal({exit, type, isUpdate, isOpen}: IProps) {

	if (!isOpen) return null;

	if (type === 'exit') {
		return (
			ReactDOM.createPortal(
				<div className={style.wrapper}>
					<div className={style.box}>
						<ExitPopUp exit={exit} />
					</div>
				</div>,
				document.body)
		)
	}
	if (type === "load") {
		return (
			ReactDOM.createPortal(
					<div className={style.wrapper}>
					<div className={style.box}>
						<LoadPopUp exit={exit} isUpdate={isUpdate}/>
					</div>
				</div>,
				document.body)
		)
	}

	else return null
}

export default PopUpBoxPortal;