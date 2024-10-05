import user from "../models/userModel.js";

export const getuserforsidebar = async(req,res) =>{
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await user.find({_id:{$ne: loggedInUserId}}).select("-password");
        res.status(200).json({
            filteredUsers
        })
    } catch (error) {
        console.log("Error:",error);
        res.status(400).json({error:"Internal server Error"});
    }
}