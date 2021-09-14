import React, {FC, useEffect, useReducer, useState} from 'react';
import {AddOptionButton} from "./AddOptionButton";
import {OptionComponent} from "./OptionComponent";
import {ELECTION_TYPES} from "../../../Constants/ELECTION_TYPES";


interface IProps {
    optionType: ELECTION_TYPES
}

const scrollableContainer = {
    overflow: 'auto',
    maxHeight: '160px',
}

const ACTIONS = {
    ADD_CANDIDATE: 'addCandidate',
    REMOVE_CANDIDATE: 'removeCandidate',
    ADD_OPTION: 'addOption',
    REMOVE_OPTION: 'removeOption'
}


const OptionInputsReducer = (state: any, action: any) => {
    switch (action.type) {
        case ACTIONS.ADD_CANDIDATE:
            return {
                ...state,
                candidates: [...state.candidates, state.candidates.length + 1]
            }
        case ACTIONS.REMOVE_CANDIDATE:
            return {
                ...state,
                candidates: state.candidates.filter((candidate: any) => candidate !== action.payload)
            }
        case ACTIONS.ADD_OPTION:
            return {
                ...state,
                options: [...state.options, state.options.length + 1]
            }
        case ACTIONS.REMOVE_OPTION:
            return {
                ...state,
                options: state.options.filter((option: any) => option !== action.payload)
            }

    }
}

const initialState = {
    candidates: [1, 2],
    options: [1, 2]
}

export const OptionInputs: FC<IProps> = ({optionType}) => {

    const [inputs, setInputs] = useState([]);
    const [state, dispatch] = useReducer(OptionInputsReducer, initialState);

    useEffect(() => {
        if (optionType === ELECTION_TYPES.CANDIDATES) {
            setInputs(state.candidates)
        } else {
            setInputs(state.options)
        }
    }, [state, optionType])


    const add = (): void => {
        if (optionType === ELECTION_TYPES.CANDIDATES) {
            dispatch({type: ACTIONS.ADD_CANDIDATE})
        } else {
            dispatch({type: ACTIONS.ADD_OPTION})
        }
    }

    const remove = (id: number): void => {

        if (optionType === ELECTION_TYPES.CANDIDATES) {
            dispatch({type: ACTIONS.REMOVE_CANDIDATE, payload: id})
        } else {
            dispatch({type: ACTIONS.REMOVE_OPTION, payload: id})
        }

    }


    return (
        <>
            <div style={scrollableContainer}>
                {inputs.map((id, i) => {
                    return <OptionComponent
                        key={i}
                        option={optionType}
                        optionNumber={id}
                        handleDelete={() => remove(id)}
                    />
                })}
            </div>
            <AddOptionButton handleClick={add}/>
        </>
    )
}