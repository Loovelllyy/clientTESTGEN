import React, {useEffect, useState} from 'react';
import TestList from '../../Components/TestList';
import withLoader from "../../HOC/withLoader";
import { wrapperStyle } from "../../../public/style";
import {Button} from "@mui/material";
import axios from "axios";

interface ITest {
	id: number,
	nameTest: string,
}

interface IProps {
	data: ITest[],
	admin: boolean,
}

const TestListPage = () => {

	const [data, setData] = useState([]);
	const [admin, setAdmin] = useState(false);


	useEffect(() => {
		axios.get('http://localhost:3030/getTests').then((d: { data: IProps }) => {
			console.log(d);
			setData(d.data.data);
			setAdmin(d.data.admin)
		} )
	}, [])

	return (
		<div css={ wrapperStyle }>
			{admin? <h2>Доступные тесты</h2> : < h1 > Выберите нужный тест</h1>}
			{admin? <Button > Выйти </Button> : null}
			<TestList data={data} admin={admin} />
		</div>
	);
};

const WrappedPage = withLoader(TestListPage)

export default WrappedPage;

