import React, {useEffect} from "react";
import { css } from "@emotion/react";
import {AiFillFileText, AiTwotoneDelete, AiTwotoneEdit} from "react-icons/ai";
import {Link, useParams} from "react-router-dom";
import {Button} from "@mui/material";
import axios from "axios";
import {PATHreq} from "../../URLs";

interface IProps {
    id: number,
    nameTest: string,
    isUpdate: () => void
    admin?: boolean,
}

const Test = ({id, nameTest, admin = false, isUpdate}: IProps) => {

    const { curId } = useParams()

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
                <Button css={css`margin-left: auto; border: 1px solid #3E514A`} onClick={ deleteTest }><AiTwotoneDelete color='var(--mainColorText)' css={css`height: 30px; width: 30px`}/></Button>
                {/*<Button  onClick={ changeTest }><AiTwotoneEdit color='var(--mainColorText)' css={css`height: 30px; width: 30px`}  /></Button>*/}
            </div>)
    }

    return (

            <div css={ wrapperStyle }>
                <AiFillFileText css={css`height: 50px; width: 50px`} />
                <p>{nameTest}</p>
            </div>
    )
}

export default Test;