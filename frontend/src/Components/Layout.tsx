import React from 'react'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'
import {StyleProvider} from "./StyleProvider";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        position: "absolute",
        top:'35%',
        left:'50%',
        transform: 'translate(-50%, -50%)'
    },
});

export const Layout = ({children}: any) => {
    const classes = useStyles()

    return (
        <StyleProvider>
            <Container className={classes.root} fixed>
                {children}
            </Container>
        </StyleProvider>
    )
}