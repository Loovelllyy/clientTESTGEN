import React, {useEffect, useState} from "react";
import {getTest, IGetTest} from "../Requests/requests";
import {useAsync} from "../HOOKS/useAsync";
import WaitingBackground from "../Components/WaitingBackground";
type TProps = React.FunctionComponent<{ dataFromServ: IGetTest, reloadData: () => void }>

function withData(WrappedComponent: TProps ) {

	return () => {

		const test = useAsync(getTest)
		const [stateData, setStateData] = useState<IGetTest>();

		const reloadData = () => {
			// if (true) return <Test></Test>
			getTest().then(d => {
				setStateData(d);
			});
		}

		useEffect(() => {
			reloadData()
		}, [])
		console.log()

		if (stateData?.admin) return <WrappedComponent dataFromServ={stateData} reloadData={reloadData}/>
		return test.value?.data[0]? <WrappedComponent dataFromServ={stateData} reloadData={reloadData}/> : <WaitingBackground children={<h1>Нет тестов</h1>} />

	};
}

export default withData;