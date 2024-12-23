import express, {Request, Response} from 'express';
import bcrypt from "bcryptjs";
import User from '../models/Users';

const router = express.Router();

router.put("/signup",async(req: Request,res: Response)=>{
    const {email,password} = req.body;
    console.log(`Request received with email:${email} and password:${password}`);
    try{
        // Check if account already exists.
        const user = await User.findOne({emailId: email});
        if (user) {
            return res.status(400).json({ message: "Email has already been taken" });
        }
        
        // Create a new user 
        const hashedPassword = await bcrypt.hash(password,10); // Salting and Hashing password
        const newUser = new User({
            emailId: email,
            password: hashedPassword
        })
        await newUser.save();
    } catch(err){
        console.log(err);
    }
});

router.post("/login",async(req:Request, res:Response)=>{
    const {email, password} = req.body;
    
    // Check if email exists
    const user = await User.findOne({emailId: email});
    if (!user) {
        return res.status(401).json({ message: "Email not registered" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password); // Comparing passwords
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    res.status(200).json({ message: "Login successful", emailId: user.emailId });

});

export default router;