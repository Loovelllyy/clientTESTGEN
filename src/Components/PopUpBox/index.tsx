import React from 'react';
import style from './style.module.css'
// import ExitPopUp from "../PopUps/ExitPopUp";
import LoadPopUp from "../PopUps/LoadPopUp";
import ExitPopUp from "../PopUps/ExitPopUp";

interface IProps {
	type: 'exit' | 'load' | '',
	exit: () => void;
}

function PopUpBox({exit, type}: IProps) {

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
					<LoadPopUp exit={exit}/>
				</div>
			</div>
		)
	}
}

export default PopUpBox;