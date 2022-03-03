// define how post/branch data is going to be stored in the database with "postSchema"
import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    branch: {
        subBranch: { type: String, required: true },
    // maybe add a time stamp here
}});

// create and export postBranch Model
const PostBranch = mongoose.model('PostBranch', postSchema);

export default PostBranch