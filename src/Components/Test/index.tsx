import React from "react";
import { css } from "@emotion/react";
import {AiFillFileText, AiTwotoneDelete} from "react-icons/ai";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import axios from "axios";
import {PATHreq} from "../../Requests/URLs";

interface IProps {
    id: number,
    nameTest: string,
    isUpdate: () => void
    admin?: boolean,
}

const Test = ({id, nameTest, admin = false, isUpdate}: IProps) => {

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
        <Link to={`/question/${id}`} css={css` text-decoration: none; color: var(--mainColorText)`}>
            <div css={ wrapperStyle }>
                <AiFillFileText css={css`height: 50px; width: 50px`} />
                <p>{nameTest}</p>
            </div>
        </Link>
    )
}

export default Test;