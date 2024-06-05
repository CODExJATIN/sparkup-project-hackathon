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
    default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
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
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  }
},

{
  timestamps: true,
}

);

const User = mongoose.model("User", UserSchema);
export default User;
