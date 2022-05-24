import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";

import {css} from "@emotion/react";
import {Button, TextField} from "@mui/material";
import {HiOutlineUpload} from "react-icons/hi";

import styles from "../../PopUps/LoadPopUp/styles.module.css";
import {parseFunc} from "../../../hendlers/parserTextFile";
import {PATHreq} from "../../../Requests/URLs";

interface IProps {
	isUpdate: () => void
}

const Form = ({isUpdate}: IProps) => {
	const {register, handleSubmit, formState: {errors, isValid}, reset, watch} = useForm({
		mode: "onChange",
	});

	const saveTest = (data: any) => {
		const nameTest = data.fileName;
		const inpFile = data.inpFile

		let reader = new FileReader();
		reader.readAsText(inpFile[0]);
		reader.onload = () => {
			let [qw, correct] = parseFunc(reader.result.toString());
			axios.post(`${PATHreq.saveTest}`, {nameTest, qw, correct}).then(d => d);
			isUpdate();
		}
		reader.onerror = () => {
			console.log(reader.error);
		};
		reset();

	}

	return(
		<form onSubmit={handleSubmit(saveTest)}
			  css={
				css`display: flex; align-items: center;
				justify-content: space-evenly; flex-direction: column;
				height: 100%;
				width: 100%;
								
		`} >
			<div className={styles.wrapper}>
				<TextField label='Введите название теста'
						   variant='standard'
						   color='secondary'
						   {...register('fileName', {
							   required: 'Обязательное поле',
							   minLength: {value: 5, message: 'минимум 5 символов'}
						   })}
						   error={!!errors?.fileName}
						   helperText={errors?.fileName ? errors?.fileName?.message : false}
				/>
				{ watch('inpFile') && watch('inpFile')[0]?.name && <p css={css`color: black`}>{watch('inpFile')[0].name}</p> }
			</div>

			<div css={css`display: flex;
			  align-items: center;
			  justify-content: space-around;
			  width: 100%`}>
				<Button color='secondary'  className={styles.btn}>
					<label className={styles.label}>
						<input type="file" className={styles.input}
							   {...register('inpFile', {required: 'Обязательное поле'})}
						/>
						<HiOutlineUpload className={styles.icon}/>
						Переместите файл сюда или выберите его
					</label>
				</Button>
				<Button color='secondary' css={styles.btn} type='submit' disabled={!isValid}>Сохранить</Button>
			</div>
		</form>
	)
}

export default Form;