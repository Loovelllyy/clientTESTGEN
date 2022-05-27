import React from "react";
import { css } from "@emotion/react";
import {AiFillFileText, AiTwotoneDelete} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import axios from "axios";
import {PATHreq} from "../../Requests/URLs";
import {changeCurrentId} from "../../Redux/Slices/sliceId";
import {useAppDispatch} from "../../HOOKS/useAppDispatch";

interface IProps {
    id: string,
    nameTest: string,
    isUpdate: () => void
    admin?: boolean,
}

const Test = ({id, nameTest, admin = false, isUpdate}: IProps) => {

    const nav = useNavigate();
    const dispatch = useAppDispatch();

    const wrapperStyle = css`
        display: flex;
        align-items: center;
        border-bottom: 1px solid black;
        gap: 40px;
        :hover {
            background: rgba(255, 255, 255, 0.15);
        }

        :active {
            background: rgba(255, 255, 255, 0.35);
        }
    `;

    const deleteTest = () => {
        axios.delete(`${PATHreq.deleteTest}?id=${id}`).then(() => isUpdate())
    }

    const myOnClick = () => {
        dispatch(changeCurrentId(id));
        nav(`/question/${id}`);
    }

    if (admin) {
        return(
            <div css={ wrapperStyle } >
                <AiFillFileText css={css`height: 50px; width: 50px`} />
                <p>{nameTest}</p>
                <Button css={css`margin-left: auto; border: 1px solid #3E514A; height: 30px; width: 30px`} onClick={ deleteTest }>
                    <AiTwotoneDelete color='var(--mainColorText)' />
                </Button>
            </div>)
    }

    return (
            <div css={ wrapperStyle } onClick={ myOnClick }>
                <AiFillFileText css={css`height: 50px; width: 50px`} />
                <p>{nameTest}</p>
            </div>
    )
}

export default Test;