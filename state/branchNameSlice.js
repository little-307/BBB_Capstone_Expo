// This reducer does one job - saves the name of the branch selected in 
// BranchItem so it can be called in BranchPage and other components 

import { createSlice } from '@reduxjs/toolkit'

const branchNameSlice = createSlice({
    name: 'branchName',
    initialState: {
        branchName: [],
    },
    reducers: {
        saveBranchName: (state, action) => {
            //console.log(action.payload)
           state.branchName = (action.payload)
        }    
    }
})

export const { saveBranchName } = branchNameSlice.actions;
export const getBranchName = (state) => state.branchName.branchName;
export default branchNameSlice.reducer;

