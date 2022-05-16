import Question from "../../Components/Question";
import {useParams, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getTest} from "../../Requests/requests";

// interface IProps {
//
// }
// interface IDataFromServer {
// 	quest: string;
// 	answersVar: string[]
// }

const ids: string[] = [];

interface ITest {
	id: string,
	nameTest: string,
}

const QuestionPage = () => {

	let {id} = useParams<string>();
	let nav = useNavigate()

	// const [data, setData] = useState<IDataFromServer[]>();

	useEffect(() => {

		getTest().then(data => {
				data.data.map((el: ITest) => {
					ids.push(el.id)
				}
				)
			}).then(() => {
			if (ids.findIndex((i) => i == id) == -1) {
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