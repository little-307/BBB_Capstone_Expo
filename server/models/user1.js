import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: { 
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    password2: {
        type: String,
    },
});

const UserModel = mongoose.model('UserModel', userSchema);
export default UserModel;