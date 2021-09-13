import React, {FC} from 'react';
import {Button, ButtonGroup} from "@material-ui/core";
import {useHistory} from "react-router-dom";


export const CustomButtonGroup: FC = () => {

    let history = useHistory()

    return (
        <>
            <ButtonGroup variant="contained" color="primary">
                <Button onClick={() => history.push('/createElection')}>Create Election</Button>
                <Button onClick={() => history.push('/Elections')}>Open Elections</Button>
            </ButtonGroup>

        </>

    )
}
