import React, {FC, useState} from 'react';
import {Box} from "@material-ui/core";
import {CustomButtonGroup} from "../Components/CustomButtonGroup";
import {CustomHeader} from "../Components/CustomHeader";



export const Home: FC = () => {


    return (
        <Box>
            <CustomHeader/>
            <CustomButtonGroup/>
        </Box>
    )
}

export default Home
