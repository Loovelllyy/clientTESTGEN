import React, { useState, ChangeEvent} from 'react';
import axios from "axios";
import {css} from "@emotion/react";
import {Button, TextField} from "@mui/material";
import {RiCloseFill, RiDeleteBack2Line} from "react-icons/ri";
import {HiOutlineUpload} from "react-icons/hi";
import {PATHclient, PATHreq} from "../../../URLs";
import { parseFunc } from "../../../hendlers/parserTextFile";
import {btn, label, icon, input, wrapper, btnDel} from './style'
import {useNavigate} from "react-router-dom";

function LoadPopUp({exit}: {exit: () => void}) {
	const nav = useNavigate();


	const [inpFile, setInpFile] = useState<any>();
	const [fileName, setFileName] = useState('');
	const [nameTest, setNameTest] = useState<string>();

	const deleteTest = () => {
		setFileName('');
	}
	const getData = (e: ChangeEvent<HTMLInputElement>) => {
		let val = e.target.value.match(/[^\/\\]+\.[^\/\\]+$/)
		setInpFile(e.target.files[0]);
		setFileName(val[0]);
	}

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
			setNameTest(e.target.value);
	}

	const saveTest = () => {
		let reader = new FileReader();
		if (inpFile) console.log('sdkfjbksdjf')
		reader.readAsText(inpFile);
		reader.onload = () => {
			let res = parseFunc(reader.result.toString());
			axios.post(`${PATHreq.saveTest}`, {nameTest, qw: res}).then(d => console.log(d))
		}
		reader.onerror = () => {
			console.log(reader.error);
		};
		exit();
	}

	return (
		<div css={css`position: relative; display: flex; flex-direction: column; align-items: center; justify-content: space-between`}>
			<p>Перетащите файл с тестом на это поле <br/> Помните, что информация в файле должна быть <abbr title='sdvsdcf'>в соответствующем виде</abbr></p>
			<Button color='secondary' onClick={exit} css={ btnDel } ><RiCloseFill css={ icon }/></Button>

			<div css={ wrapper }>
				<TextField label='Введите название теста' variant='standard' color='secondary' onChange={ (e: ChangeEvent<HTMLTextAreaElement>) => handleChange(e) } />
				<p css={css`color: black`}>{fileName}</p>
				<Button color='secondary' onClick={ deleteTest }><RiDeleteBack2Line css={ icon } /></Button>
			</div>

			<div css={ css`display: flex; align-items: center; justify-content: space-around; width: 100%` }>
				<Button color='secondary' css={ btn }>
					<label css={ label }>
						<input type="file" css={ input } onChange={(e) => getData(e)}/>
						<HiOutlineUpload css={ icon } />
						Выберите файл...
					</label>
				</Button>

				<Button color='secondary' css={ btn } onClick={saveTest}>Сохранить</Button>
			</div>
		</div>
	);
}

export default LoadPopUp;