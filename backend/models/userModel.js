import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender:{
    type:String,
    required:true,
  },
  profilePic:{
    type:String,
    required:true,
  },
},
{timestamps:true}
);

const user = mongoose.model("User", userSchema);
export default user;