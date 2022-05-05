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
			<p>Перетащите файл с тестом на это поле <br/> Помните, что информация в файле должна быть <abbr
				title='sdvsdcf'>в соответствующем виде</abbr></p>
			<Button color='secondary' onClick={exit} css={btnDel}><RiCloseFill css={icon}/></Button>

			<Form exit={exit} isUpdate={isUpdate}/>

		</div>
	);
}

export default LoadPopUp;

/*
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
 */