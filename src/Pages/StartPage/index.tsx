import React, {useEffect, useState} from "react";
import {Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {css} from "@emotion/react";

import Logo from '~media/logo.png'
import axios from "axios";
import {PATHreq, PATHclient} from "../../URLs";

const StartPage = () => {

    const goLink = useNavigate();

    const [isAdminLink, setIsAdminLink] = useState(PATHclient.LogInPage);
    const [student, setStudent] = useState(true)

    const goLogin = () => {
        goLink(isAdminLink)
    }
    const goTestList = () => {
        goLink(PATHclient.TestListPage)
    }
    useEffect(() => {
        axios.get(`${PATHreq.checkedCookie}`, {}).then(d => {
            if(d.data) {
                console.log('true');
                setStudent(false);
                setIsAdminLink(PATHclient.TestListPage);
            }
            else console.log('false');
        })
    }, [])

    const style = css`
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: center;
        justify-content: space-evenly;
        background: var(--bgGradient);
    `;

    const logo = css`
        animation: from-top 3s;
        animation-fill-mode: forwards;
        z-index: 5;
        @keyframes from-top {
            0% {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
                width: 100vw;
            }
            100% {
                height: 60vh;
                width: 50vw;
            }
        }
    `

    return (
            <Box css={ style }>
                <div css={logo}>
                    <img src={Logo} alt='Logo' css={css` height: 100%; width: 100% `} />
                </div>
                <Button variant='outlined' onClick={goLogin}>Я преподаватель</Button>
                {student? <Button variant='outlined' onClick={goTestList}>Я студент</Button> : null}
            </Box>
    )
}

export default StartPage;