import { createSlice } from '@reduxjs/toolkit'

const postListSlice = createSlice({
    name: 'postList',
    initialState: {
        postList: [],
    },
    reducers: {
        // getPosts
        getPosts: (state, action) => {
            console.log(action.payload)
            state.postList = (action.payload);
        },

        // createPost
        createPost: (state, action) => {
            console.log(action.payload)
            state.postList.push(action.payload);
        },

        //updatePost 
        updatePost: (state, action) => {
            console.log(action.payload)
            state.postList.map((post) => (post._id === action.payload._id ? action.payload : post));
        },
        deletePost: (state, action) => {
            state.postList.filter((post) => post._id !== action.payload);
        }
    }
})

export const { createPost, getPosts, updatePost, deletePost } = postListSlice.actions;
export const selectPostList = (state) => state.postList.postList;
export default postListSlice.reducer;


// [{trunk: 
//     ["education"]
//  }, 
//         {mainBranch:["English", 
//                     "React"]
//         }, 
//         {subBranch: [
//                 ["verbs", 
//                 "adjectives"],
//                 ["hooks", 
//                 "useState"]

//         ]
            
//         }
            
// ]

// [{trunks: 
//     ["education", 
//         {mainBranches:
//             ["English"
//                 {subBranches: [
//                     ["verbs", 
//                     "adjectives"],
//                 ]},
//              "React"
//                 {subBranches: [
//                     ["hooks", 
//                     "useState"]
//                 ]}
//             ]
        
//         },
//     ]
//  }, 
// ]


// {commentList.map((entry, i) => {
//     if (entry.index === index) { //this is to make sure the comments only load on the correct blog
//        return (
//            <Card key={i} className="mt-2">
//                <Card.Header className="text-light bg-secondary d-flex"> {entry.name} says: </Card.Header>
//                <Card.Text className="p-3 d-flex"> {entry.comment}</Card.Text>
//            </Card>
//        )
//    }
// })}