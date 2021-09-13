import React, {useState} from 'react';
import {TextField} from "@material-ui/core";

import {AddCandidateButton} from "./AddCandidateButton";
import {MdDelete} from "react-icons/all";

export const CandidatesInputs = () => {

    const [candidates, setCandidates] = useState([1,2]);

    const addTextField = () => {
        setCandidates([...candidates, candidates.length + 1])
    }

    return (
        <>
            <div>
                {candidates.map((candidate, i) => {
                    return <TextField key={i} label={`Candidate #${candidate}`}/>
                })}
            </div>
            <AddCandidateButton handleClick={addTextField}/>
        </>
    )
}