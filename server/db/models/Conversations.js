// const bcrypt = require('bcryptjs');
// const mongoose = require('mongoose');
import bcrypt from "bcrypt"
import mongoose from "mongoose";

const conversationSchema = mongoose.Schema({
   members: {
        type: Array,
        required: true,
   }
})
const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation;