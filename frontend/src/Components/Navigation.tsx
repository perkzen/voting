import React, {FC} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import {CreateElectionPage} from "../Pages/CreateElectionPage";
import {OpenElectionsPage} from "../Pages/OpenElectionsPage";
import Home from "../Pages/Home";

export const Navigation: FC = () => {
    return (

        <Router>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/createElection'} component={CreateElectionPage}/>
            <Route path={'/Elections'} component={OpenElectionsPage}/>
        </Router>
    )
}