export const trunkData = [
    {
        text: 'Education', 
        key: '1', 
       
    },
    {text: 'Health & Fitness', key: '2'},
    {text: 'Business', key: '3'},
]

export const branchData = [
    {
        parent: 'education',
        text: 'math',
        key: '1',
    },
    {
        parent: 'Health & Fitness',
        text: 'diet',
        key: '7',
    },
    {
        parent: 'education',
        text: 'english',
        key: '2',
    },
    {
        parent: 'education',
        text: 'social studies',
        key: '3',
    },
]

export const subBranchData = [
    {
        parent: 'math',
        text: 'algebra',
        key: '1',
    },
    {
        parent: 'math',
        text: 'geometry',
        key: '2',
    },
    {
        parent: 'english',
        text: 'nouns',
        key: '3',
    },
    {
        parent: 'english',
        text: 'verbs',
        key: '4',
    },
    {
        parent: 'social studies',
        text: 'history',
        key: '5',
    },
    {
        parent: 'social studies',
        text: 'government',
        key: '6',
    },
]





