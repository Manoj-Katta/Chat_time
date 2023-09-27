import mongoose from "mongoose";

const groupsSchema = mongoose.Schema({
   groups: {
        type: Array,
        required: true,
   }
})
const Conversation = mongoose.model('Groups', groupsSchema);

export default Conversation;