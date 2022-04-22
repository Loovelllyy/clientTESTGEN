import React from "react";
import WaitingBackground from "../../Components/WaitingBackground";
import SignUp from "../../Components/Singup";


const LogIn = () => {
    return (
        <WaitingBackground children={<SignUp />} />
    )
}

export default LogIn;