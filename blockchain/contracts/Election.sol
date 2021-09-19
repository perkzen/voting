pragma solidity >=0.7.0;
pragma experimental ABIEncoderV2;

contract Elections {

    // add expiration date
    // only vote once per election
    // delete election ?

    uint electionCounter = 0;
    uint voteCounter = 0;


    struct Vote {
        uint electionID;
        string value;
        address user;
    }

    struct Election {
        string name;
        address creator;
        uint electionVoteCount;
        // expiration date
        uint expirationTime;
        //type of election
        string electionType;
    }

    mapping (uint => Vote) public votes;

    mapping (uint  => Election) public idToElection;



    function createVoting (string memory _name, string memory _type, uint _expirationDate) public {
        electionCounter++;
        uint expire = block.timestamp + _expirationDate;
        idToElection[electionCounter] = Election(_name,msg.sender,0,expire, _type);
    }

    function vote (uint _electionID, string memory _voteValue) public {
       // require(block.timestamp <= idToElection[_electionID].expirationTime);
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
