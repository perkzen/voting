import React from 'react';
import {FaUserPlus} from "react-icons/all";

export const AddCandidateButton = ({handleClick} : any) => {
    const styles = {
        color: 'rgba(34,57,150,0.84)',
        fontSize: 22,
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