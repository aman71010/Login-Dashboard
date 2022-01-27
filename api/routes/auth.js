import express from "express";
import User from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();

//Register

router.post("/register", async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const newUser = new User({
            name: req.body.firstName + ' ' + req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);   
    } catch(err){
        res.status(500).json(err);
    }
});

//LOGIN

router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({ username: req.body.username });
        if(!user){
            return res.status(401).json("Wrong credentials! usermame not exits");
        }
        
        const matchPassword = await bcrypt.compare(req.body.password, user.password);

        if(!matchPassword){
            return res.status(401).json("Wrong credentials! wrong password");
        }
        
        const accessToken = jwt.sign(
            {
                id: user._id,
                group: user.group
            },
            process.env.JWT_SEC,
            {expiresIn: "3d"}
        );

        const { password, ...others } = user._doc;

        res.status(201).json({...others, accessToken});
    } catch(err){
        res.status(500).json(err);
    }

});

export default router;