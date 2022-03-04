export const trunkData = [
    {
        text: 'Education', 
        key: '1', 
        branch: [
            'math',
            'english',
            'social studies'
        ]
    },
    {text: 'Health & Fitness', key: '2', 
    branch: [
        'diet'
    ]},
    {text: 'Business', key: '3'},
]

export const branchData = [
    {
        parent: 'education',
        text: 'math',
        key: '1',
        subBranch: [
            'algebra',
            'geometry',
        ]
    },
    {
        parent: 'Health & Fitness',
        text: 'diet',
        key: '7',
        subBranch: [
            'calories',
            'greens',
        ]
    },
    {
        parent: 'education',
        text: 'english',
        key: '2',
        subBranch: [
            'nouns',
            'verbs',
        ]
    },
    {
        parent: 'education',
        text: 'social studies',
        key: '3',
        subBranch: [
            'history',
            'government',
        ]
    },
]

export const subBranchData = [
    {
        text: 'algebra',
        key: '1',
    },
    {
        text: 'geometry',
        key: '2',
    },
    {
        text: 'nouns',
        key: '3',
    },
    {
        text: 'verbs',
        key: '4',
    },
    {
        text: 'history',
        key: '5',
    },
    {
        text: 'government',
        key: '6',
    },
]





