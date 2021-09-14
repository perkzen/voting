import React, {FC} from 'react';
import {InputAdornment, TextField} from "@material-ui/core";
import {FaUserTie, TiDelete} from "react-icons/all";
import {ELECTION_TYPES} from "../../../Constants/ELECTION_TYPES";


interface IProps {
    optionNumber: number,
    handleDelete: () => void,
    option: ELECTION_TYPES
}


export const OptionComponent: FC<IProps> = ({optionNumber, handleDelete, option}) => {

    const Icon = {
        color: '#233e7a',
        cursor: 'pointer',
        fontSize: '20'
    }

    const container = {
        marginLeft: 8,
    }

    const labelText = () => {
        switch (option) {
            case ELECTION_TYPES.CANDIDATES:
                return 'Candidate'
            case ELECTION_TYPES.MULTIPLE:
                return 'Option'
        }
    }


    return (

        <div style={container}>
                    <TextField
                        label= {`${labelText()} #${optionNumber}`}
                        InputProps={{
                        startAdornment: (
                                <InputAdornment position="start">
                                    {option === ELECTION_TYPES.CANDIDATES ? <FaUserTie style={Icon} /> : null }
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <TiDelete style={Icon} onClick={handleDelete} />
                                </InputAdornment>
                            ),
                        }}
                    />
        </div>
    )
}