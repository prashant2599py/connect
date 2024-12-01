import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "15d"
    })

    res.cookie("token", token, {
        expiresIn: 15 * 24 * 60 * 60 * 1000 , // miliseconds
        httpOnly: true, // prevents XSS attacks cross site scripting attacks 
        sameSite :"strict", // CSRF attacks cross site request forgeryattacks
    })
}

export default generateTokenAndSetCookie;