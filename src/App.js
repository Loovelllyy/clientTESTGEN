import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Start from "./Pages/StartPage";
import LogIn from "./Pages/LogInPage";
import HomePage from "./Pages/HomePage";
import NotFoundPage from './Pages/NotFoundPage'
import QuestionPage from "./Pages/QuestionPage";
import Loader from "./Components/Loader";
import AnswerPage from "./Pages/ResultPage";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='*' element={ <NotFoundPage/> }/>
				<Route path='/' element={<Start/>}/>
				<Route path='/logIn' element={<LogIn/>}/>
				<Route path='/home' element={<HomePage/>}/>
				<Route path={`/question/${1}`} element={<QuestionPage/>}/>
				<Route path='/test' element={<Loader/>}/>
				<Route path='/result' element={<AnswerPage/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;