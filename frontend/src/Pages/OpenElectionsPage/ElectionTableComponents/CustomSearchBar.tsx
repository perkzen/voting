import React, {FC} from 'react';
import {InputAdornment, TextField} from "@material-ui/core";
import {HiSearchCircle} from "react-icons/all";


export const CustomSearchBar:FC = () => {

    const Icon = {
        color: '#233e7a',
        fontSize: '20'
    }


    return (
        <div>
            <TextField
                style={{margin: 20}}
                placeholder={'Search'}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                          <HiSearchCircle style={Icon}/>
                        </InputAdornment>
                    )}}
            />
        </div>
    )
}