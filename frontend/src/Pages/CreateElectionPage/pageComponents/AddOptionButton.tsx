import React from 'react';
import {MdAddCircle} from "react-icons/all";

export const AddOptionButton = ({handleClick}: any) => {
    const styles = {
        color: 'rgba(34,57,150,0.84)',
        fontSize: 22,
        cursor: 'pointer',
        marginLeft: 45,
        marginTop: 5
    }
    return (
        <div style={{textAlign: 'start'}}>
            <MdAddCircle style={styles} onClick={handleClick}/>
        </div>
    )
}