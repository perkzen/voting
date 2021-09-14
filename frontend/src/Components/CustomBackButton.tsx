import React, {FC} from 'react';
import {MdKeyboardBackspace} from "react-icons/all";
import {useHistory} from "react-router-dom";

export const CustomBackButton: FC = () => {
    let history = useHistory()
    const buttonStyle = {
        fontSize: 30,
        cursor: 'pointer',
        marginRight: '300px'
    }

    return (
            <MdKeyboardBackspace onClick={() => history.push('/')} style={buttonStyle}/>
    )
}