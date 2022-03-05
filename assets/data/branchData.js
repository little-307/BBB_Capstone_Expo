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
        parent: 'Education',
        text: 'Math',
        key: '1',
    },
    {
        parent: 'Health & Fitness',
        text: 'Diet',
        key: '7',
    },
    {
        parent: 'Education',
        text: 'English',
        key: '2',
    },
    {
        parent: 'Education',
        text: 'Social Studies',
        key: '3',
    },
]

export const subBranchData = [
    {
        parent: 'Math',
        text: 'Algebra',
        key: '1',
    },
    {
        parent: 'Math',
        text: 'Geometry',
        key: '2',
    },
    {
        parent: 'English',
        text: 'Nouns',
        key: '3',
    },
    {
        parent: 'English',
        text: 'Verbs',
        key: '4',
    },
    {
        parent: 'Social Studies',
        text: 'History',
        key: '5',
    },
    {
        parent: 'Social Studies',
        text: 'Government',
        key: '6',
    },
]