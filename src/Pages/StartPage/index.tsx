import React from "react";
import {Button, Box } from "@mui/material";
import {Link} from "react-router-dom";
import {css} from "@emotion/react";

import Logo from '~media/logo.png'

const StartPage = () => {

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
                <Link to='/logIn' style={{ textDecorationLine: 'none', alignItems: 'center' }} >
                    <Button variant='outlined' >Я преподаватель</Button>
                </Link>
                <Link to='/testListPage' style={{ textDecorationLine: 'none' }}>
                    <Button variant='outlined'>Я студент</Button>
                </Link>
            </Box>
    )
}

export default StartPage;