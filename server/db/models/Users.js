import bcrypt from "bcrypt"
import mongoose from "mongoose";
// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    token:{
        type: String,
    }
})

userSchema.pre('save', async function(next){
    try{
        if(this.isNew){
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(this.password,salt)
            this.password = hashedPassword
        }
        next()
    }   
    catch(error){
        return next(error)
    }
})

// userSchema.methods.comparePassword = async function(candidatePassword){
//     const isMatch = await bcrypt.compare(candidatePassword,this.password);
//     return isMatch;
// }

const Users = mongoose.model('User',userSchema);

// module.exports = Users;
export default Users