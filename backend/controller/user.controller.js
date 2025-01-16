import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) => {

    try {
        
        const loggedInUser = req.user._id;
        const allUsers = await User.find({ _id: {$ne: loggedInUser }})

        res.status(200).json(allUsers)
    } catch (error) {
        console.error("Erro in getUsersForSideBar: ", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}
