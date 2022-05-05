import React from 'react';
import style from './style.module.css'
import LoadPopUp from "../PopUps/LoadPopUp";
import ExitPopUp from "../PopUps/ExitPopUp";

interface IProps {
	type: 'exit' | 'load' | '',
	exit: () => void;
	isUpdate: () => void;
}

function PopUpBox({exit, type, isUpdate}: IProps) {

	if (type === 'exit') {
		return (
			<div className={style.wrapper}>
				<div className={style.box}>
					<ExitPopUp exit={exit} />
				</div>
			</div>
		)
	}
	if (type === "load") {
		return (
			<div className={style.wrapper}>
				<div className={style.box}>
					<LoadPopUp exit={exit} isUpdate={isUpdate}/>
				</div>
			</div>
		)
	}
}

export default PopUpBox;