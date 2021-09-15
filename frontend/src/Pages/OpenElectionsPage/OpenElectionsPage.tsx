import React from 'react';
import {CustomHeader} from "../../Components/CustomHeader";
import {CustomBackButton} from "../../Components/CustomBackButton";
import ElectionsTable from "./ElectionTableComponents/ElectionsTable";



export const OpenElectionsPage = () => {
    return (
        <div style={{marginTop:50}}>
            <CustomHeader />
            <CustomBackButton/>
            <ElectionsTable/>
        </div>
    )
}