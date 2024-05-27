import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  picturePath: {
    type: String,
    default: "",
  },
  connections: {
    type: Array,
    default: [],
  },
  location: String,
  accountType: String,    
  viewedProfile: Number,
  impressions: Number,
  
  accountType: {
    type: String, 
    required: true,
  },
},

{
  timestamps: true,
}

);

const User = mongoose.model("User", UserSchema);
export default User;
