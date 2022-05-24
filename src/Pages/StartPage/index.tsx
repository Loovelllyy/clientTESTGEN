import React from "react";
import {Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {css} from "@emotion/react";

import Logo from '~media/logo.png'
import {PATHclient} from "../../Requests/URLs";

const StartPage = () => {
    const goLink = useNavigate();

    const goLogin = () => {
        goLink(PATHclient.LogInPage)
    }
    const goTestList = () => {
        goLink(PATHclient.TestListPage)
    }

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
                <Button variant='outlined' onClick={goTestList}>Я студент</Button>
            </Box>
    )
}

export default StartPage;