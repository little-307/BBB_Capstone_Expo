// import mongoose from "mongoose";
// import crypto from "crypto";
// import uuidv1 from "uuid/v1";

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         maxLenghth: 24,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     encry_password: {
//         type: String,
//         required: true
//     },
//     salt: String,
// }, {timestamps: true});

// userSchema
//     .virtual("password")
//     .set((password) => {
//         this_password = password;
//         salt = uuidv1();
//         encry_password = this.securePassword(password)
//     })
//     .get(() => {
//         return this._password 
//     })

// userSchema.methods = {
//     authenticate: function(plainpassword) {
//         return this.securePassword(plainpassword) === this.encry_password
//     }

//     securePassword: function(plainpassword) {
//         if(!plainpassword) return "";

//         try {
//             return crypto.createHmac("sha256", this.salt).update(plainpassword).digest("hex")
//         } catch (err) {
//             return ""
//         }
//     }
// }

// module.exports = mongoose.model("User", userSchema)
    