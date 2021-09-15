import React, {FC} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        textField: {
            width: 200,
            margin: theme.spacing(1),
        },
    }),
);

export const CustomDateTimePicker:FC = () => {
    const classes = useStyles();

    return (
            <TextField
                label="Expiration Date"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
    );

}