import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material';

import StartPage from "./Pages/StartPage";
import LogIn from "./Pages/LogInPage";
import NotFoundPage from './Pages/NotFoundPage'
import QuestionPage from "./Pages/QuestionPage";
import Loader from "./Components/Loader";
import ResultPage from "./Pages/ResultPage";
import TestListPage from "./Pages/TestListPage";

const myTheme = createTheme({
	palette: {
		primary: {
			main: 'rgba(255, 255, 255, 0.63)',
			light: 'rgb(255,255,255)',
			dark: 'rgba(154,154,154,0.63)',
			contrastText: '#3E514A'
		},
		secondary: {
			main: '#3E514A',
			light: '#94b7ac',
			dark: '#2c3f35',
			contrastText: '#868686'
		}
}
})

function App() {


	return (
		<ThemeProvider theme={myTheme}>
			<BrowserRouter>
				<Routes>
					{/*<Route path='*' element={ <NotFoundPage/> }/>*/}
					<Route path='/' element={<StartPage/>}/>
					<Route path='/logIn' element={<LogIn/>}/>
					<Route path='/test' element={<Loader/>}/>
					<Route path='/result' element={<ResultPage/>}/>
					<Route path='/testListPage' element={<TestListPage/>}/>
					<Route path={`/question/:id`} element={<QuestionPage/>}/>
					{/*<Route path={`/question/d6f9c9d5-ae6c-4474-afac-496d2bf48040`} element={<h1>QUESTION</h1>}/>*/}
				</Routes>
			</BrowserRouter>
		</ThemeProvider>

	);
}

export default App;