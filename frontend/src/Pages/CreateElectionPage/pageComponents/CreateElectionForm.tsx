import React, {ChangeEvent, FC, useState} from 'react';
import {Box, Button, createStyles, MenuItem, TextField, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ELECTION_OPTIONS, ELECTION_TYPES} from "../../../Constants/ELECTION_TYPES";
import {renderCustomInputs} from "./CustomFormInputGroups";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: 'white',
            borderRadius: 10,
            width: 340,
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
        container: {
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            marginTop: 10
        },
        margin: {
            margin: theme.spacing(1),
        },
    }),
);


export const CreateElectionForm: FC = () => {
    const classes = useStyles()

    const [type, setType] = useState<ELECTION_TYPES>(ELECTION_TYPES.REFERENDUM)

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => setType(+e.target.value)



    return (
        <Box className={classes.container}>
            <form className={classes.root}>
                <div>
                    <TextField label="Election Name"/>
                </div>
                <div>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        value={type}
                        onChange={handleChange}
                        helperText="Please select the type of election"
                    >
                        {ELECTION_OPTIONS.map((option: { value: ELECTION_TYPES, label: string }) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div>
                    {renderCustomInputs(type)}
                </div>
                <Button variant="contained" color="primary" className={classes.margin} >Create</Button>
            </form>
        </Box>

    )
}
