import {ELECTION_TYPES} from "../../../Constants/ELECTION_TYPES";
import {ReferendumInputs} from "./ReferendumInputs";
import {CandidatesInputs} from "./CandidatesInputs";
import {MultipleInputs} from "./MultipleInputs";





export const renderCustomInputs = (type:ELECTION_TYPES):  JSX.Element | undefined => {
        switch (type) {
            case ELECTION_TYPES.REFERENDUM:
                return <ReferendumInputs/>
            case ELECTION_TYPES.CANDIDATES:
                return <CandidatesInputs/>
            case ELECTION_TYPES.MULTIPLE:
                return <MultipleInputs/>
            default:
                console.log(type)

        }
    }
