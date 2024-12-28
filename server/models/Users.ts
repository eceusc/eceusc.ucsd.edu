import mongoose, { Schema } from 'mongoose';

// User Schema.
// Includes username, email id, and password.
const user = new Schema({
    emailId: {type:String, required: true, unique: true},
    password: {type: String, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    major: {type: String, required: true},
});

const User = mongoose.model('User',user);

export default User;