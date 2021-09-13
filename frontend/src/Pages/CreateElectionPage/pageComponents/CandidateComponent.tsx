import React, {FC} from 'react';
import {Box, TextField} from "@material-ui/core";
import {TiDelete} from "react-icons/all";


interface IProps {
    candidateNumber: number,
    handleDelete: () => void
}

export const CandidateComponent: FC<IProps> = ({candidateNumber, handleDelete}) => {

    const Icon = {
        color: '#e30c27',
        cursor: 'pointer',
        fontSize: '20'
    }

    return (
        <Box>
            <TextField label={`Candidate #${candidateNumber}`}/>
            <TiDelete style={Icon} onClick={handleDelete}/>
        </Box>

    )
}