import React, {FC, useState} from 'react';
import {AddCandidateButton} from "./AddCandidateButton";
import {CandidateComponent} from "./CandidateComponent";

export const CandidatesInputs: FC = () => {

    const [candidates, setCandidates] = useState<number[]>([1, 2]);

    const addTextField = (): void => {
        setCandidates([...candidates, candidates.length + 1])
    }

    const deleteTexTField = (candidate: number): void => {
        const filteredArr = candidates.filter(item => item !== candidate)
        setCandidates(filteredArr)
    }

    return (
        <>
            <div>
                {candidates.map((candidate, i) => {
                    return <CandidateComponent
                        key={i}
                        candidateNumber={candidate}
                        handleDelete={() => deleteTexTField(candidate)}
                    />
                })}
            </div>
            <AddCandidateButton handleClick={addTextField}/>
        </>
    )
}