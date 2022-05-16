import React, {useEffect, useState} from "react";
import WaitingBackground from "../../Components/WaitingBackground";
import TestListPage from "../TestListPage";
// import axios from "axios";

const HomePage = () => {
    let [data1, setData1] = useState(0);

    useEffect(() =>{
          setTimeout(()=> {
              setData1(1)
        }, 1000)
    }, [])

    if (data1) return <TestListPage />
    else return <WaitingBackground children={<h1>Нет доступных тестов</h1>}/>
}

export default HomePage;