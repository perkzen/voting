import React, {FC} from 'react';
import {CreateElectionForm} from "../Components/CreateElectionForm";
import {CustomBackButton} from "../Components/CustomBackButton";
import {CustomHeader} from "../Components/CustomHeader";

export const CreateElectionPage: FC = () => {
    return (
        <div>
            <CustomHeader/>
            <CustomBackButton/>
            <CreateElectionForm/>
        </div>
    )
}