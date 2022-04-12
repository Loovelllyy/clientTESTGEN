import React, {useState} from "react";
import { css } from "@emotion/react";
import { AiFillFileText } from "react-icons/ai";
import { Link } from "react-router-dom";



const Test = ({id, nameTest}: {id: number, nameTest: string}) => {

    // const [id, idSet] = useState<number>(1)

    const wrapperStyle = css`
        height: 15%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid black;
        gap: 40px;
        margin-bottom: 20px;
        :hover {
            background: rgba(255, 255, 255, 0.15);
        }

        :active {
            background: rgba(255, 255, 255, 0.35);
        }
    `;

    const itemStyle = css`
        width: 6%;
        height: 100%;
    `;

    return (
        <Link to={`/question/${id}`} css={css` text-decoration: none; color: var(--mainColorText)`}>
            <div css={ wrapperStyle }>
                <AiFillFileText css={ itemStyle } />
                <p>{nameTest}</p>
            </div>
        </Link>
    )
}

export default Test;