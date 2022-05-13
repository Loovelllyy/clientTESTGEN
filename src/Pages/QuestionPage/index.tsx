import Question from "../../Components/Question";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import {PATHreq} from "../../URLs";
import {useEffect, useState} from "react";

// interface IProps {
//
// }
// interface IDataFromServer {
// 	quest: string;
// 	answersVar: string[]
// }

const ids: string[] = []

const QuestionPage = () => {

	let { id } = useParams<string>();
	let nav = useNavigate()

	// const [data, setData] = useState<IDataFromServer[]>();

	useEffect(() => {
		axios.get(PATHreq.getTests).then(d => {
			d.data.data.map((el: {id: string}) => {
				ids.push(el.id)
			})
		}).then(() => {
			if(ids.findIndex((i) => i == id) == -1) {
				nav('/not-found');
			}
		})
	}, []);
	
	return (
		<>
			<Question id={id}/>
		</>
	)

}

export default QuestionPage;