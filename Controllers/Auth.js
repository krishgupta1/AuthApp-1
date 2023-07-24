const bcrypt = require('bcrypt');
const User = require("../model/User")

// Route Handler for SignUp

exports.signup = async (req, res) => {
    try{
        // get data
        const {name, email, password} = req.body;
        // check if user already exists
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success:false,
                message: "User Already Exists"
            });
        }
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10)
        }
        catch{
            res.status(500).json({
                success:false,
                message : "Error in Passing"
            });
        }
        
        // Create Entry for User
        const user = await User.create({
            name, email, password:hashedPassword, role
        })

        return res.status(200).json({
            success:true,
            message:"User Created Successfully",
        })
    }

    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"User cannot be registered, please try again later"
        })
    }
}