import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res)=>{
    const token = jwt.sign({userId}, process.env.jwt_secret,{
        expiresIn: "15d",
    });

    res.cookie("jwt", token, {
        maxage : 30 * 24 * 60 * 60 * 1000, //30 days
        httpOnly: true, //prevent XSS attacks cross-site scripting attacks
        sameSite: "strict", //CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development",
    })
}

export default generateTokenAndSetCookie;