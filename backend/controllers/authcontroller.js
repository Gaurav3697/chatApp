import bcrypt from "bcryptjs";
import user from "../models/userModel.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const signup = async (req, res) => {
   try {
      const { name, username, password, gender } = req.body;

      const User = await user.findOne({ username });

      if (User) {
         return res.status(201).json({
            error: "User already exists"
         })
      }

      //Hash password here 
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      //  using api https://avatar-placeholder.iran.liara.run/

      //profile

      const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
      const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

      const newUser = new user({
         name,
         username,
         password: hashedPassword,
         gender,
         profilePic: (gender === "male" || !gender) ? boyprofilepic : girlprofilepic,
      })

      if (newUser) {
         //generate jwt token here
         generateTokenAndSetCookie(newUser._id, res);
         await newUser.save();

         res.status(200).json({
            _id: newUser._id,
            name: newUser.name,
            username: newUser.username,
            gender: newUser.gender,
            profilePic: newUser.profilePic
         })
      } else {
         res.status(400).json({
            error: "invalid user data",
         })
      }
      
      
   }
   catch (error) {
      console.log("Error in signup controller", error.message);
      res.status(500).json({ error: "Internal Server Error" });
   }
}

export const login = async(req,res) =>{
   try {
      const {username, password} = req.body;
      const User = await user.findOne({username});
      const isPasswordcorrect = await bcrypt.compare(password, User?.password);
      
      if(!User || !isPasswordcorrect){
         return res.status(400).json({
            error:"Invalid username or password"
         })
      }

      generateTokenAndSetCookie(User._id, res);

      res.status(200).json({
         message:"LoggedIn successfully",
         User,
      })
   } catch (error) {
      console.log("Error:",error);
      res.status(500).json({
         error:"Internal server error"
      })
   }
}

export const logout = async(req,res) =>{
   try {
      res.cookie("jwt","",{maxage:0});
      res.status(200).json({
         message:"Logged out successfully"
      })
   } catch (error) {
      res.status(500).json({
         error:"Internal server error"
      })
   }
}