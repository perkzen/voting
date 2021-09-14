import {ELECTION_TYPES} from "../../../Constants/ELECTION_TYPES";
import {ReferendumInputs} from "./ReferendumInputs";
import {OptionInputs} from "./OptionInputs";





export const renderCustomInputs = (type:ELECTION_TYPES):  JSX.Element | undefined => {
        switch (type) {
            case ELECTION_TYPES.REFERENDUM:
                return <ReferendumInputs/>
            case ELECTION_TYPES.CANDIDATES:
                return <OptionInputs optionType={ELECTION_TYPES.CANDIDATES}/>
            case ELECTION_TYPES.MULTIPLE:
                return <OptionInputs optionType={ELECTION_TYPES.MULTIPLE}/>
            default:
                console.log(type)

        }
    }
