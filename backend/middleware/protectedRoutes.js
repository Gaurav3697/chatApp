import jwt from "jsonwebtoken"
import user from "../models/userModel.js";

const protectRoutes = async(req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(400).json({
                error: "unauthorized accesss - No token provided"
            })
        }

        const decoded = jwt.verify(token, process.env.jwt_secret)

        if (!decoded) {
            return res.status(400).json({
                error: "unauthorized accesss - Invalid token"
            })
        }

        const User = await user.findById(decoded.userId).select("-password");

        if(!User){
            return res.status(400).json({
                error:"User not found"
            })
        }

        req.user = User;

        next();

    } catch (error) {
        console.log("Error in protect Route middleware", error);
        res.status(500).json({
            error:"Internal server error"
        })
    }
}

export default protectRoutes;