pragma solidity >=0.7.0;
pragma experimental ABIEncoderV2;

contract Elections {

    uint electionCounter = 0;
    uint voteCounter = 0;

    struct Vote {
        uint electionID;
        bool value;
        address user;
    }

    struct Election {
        address creator;
        uint electionVoteCount;
    }

    mapping (uint => Vote) public votes;

    mapping (uint  => Election) public idToElection;



    function createVoting () public {
        electionCounter++;
        idToElection[electionCounter] = Election(msg.sender,0);
    }

    function vote (uint _electionID, bool _voteValue) public {
        voteCounter++;
        idToElection[_electionID].electionVoteCount++;
        votes[voteCounter]= (Vote(_electionID,_voteValue,msg.sender));
    }

    function getVotes (uint _electionID) public view returns (Vote[] memory) {
        Vote[] memory electionVotes = new Vote[](idToElection[_electionID].electionVoteCount);
        uint counter = 0;
        for (uint i = 0; i < voteCounter; i++) {
            if (votes[i].electionID == _electionID) {
                electionVotes[counter] = votes[i];
                counter++;
            }
        }
        return electionVotes;
    }

}
