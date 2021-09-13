export enum ELECTION_TYPES {
    CANDIDATES,
    MULTIPLE,
    REFERENDUM
}


export const ELECTION_OPTIONS = [
    {
        value: ELECTION_TYPES.CANDIDATES,
        label: 'Candidates'
    },
    {
        value: ELECTION_TYPES.MULTIPLE,
        label: 'Multiple Choice'
    },
    {
        value: ELECTION_TYPES.REFERENDUM,
        label: 'Referendum'
    }
]


