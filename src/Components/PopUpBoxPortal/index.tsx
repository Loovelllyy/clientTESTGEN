import React from 'react';
import ReactDOM from "react-dom";
import styles from './styles.module.css'
import {Button} from "@mui/material";
import {RiCloseFill} from "react-icons/ri";
import {EmotionJSX} from "@emotion/react/types/jsx-namespace";


interface IProps {
	exitPopUp: () => void;
	Child:  EmotionJSX.Element;
}

function PopUpBoxPortal({exitPopUp, Child}: IProps) {

		return (
			ReactDOM.createPortal(
				<div className={styles.wrapper}>
					<div className={styles.box}>
						<Button sx={{ position: 'absolute' }} color='secondary' onClick={exitPopUp} className={`${styles.btnDel} ${styles.icon}`} ><RiCloseFill /></Button>
						{Child}
					</div>
				</div>,
				document.body)
		)
}

export default PopUpBoxPortal;