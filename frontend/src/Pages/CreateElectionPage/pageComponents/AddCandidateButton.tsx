import React from 'react';
import {FaUserPlus} from "react-icons/all";

export const AddCandidateButton = ({handleClick} : any) => {
    const styles = {
        color: '#52525b',
        fontSize: 25,
       cursor: 'pointer',
        marginLeft: 45,
        marginTop: 5
    }
    return (
        <div style={{textAlign: 'start'}}>
            <FaUserPlus style={styles} onClick={handleClick}/>
        </div>
    )
}