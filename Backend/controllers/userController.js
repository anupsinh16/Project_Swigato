const UserModel = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({email : email});

    if(!user){
      return res.status(400).send("User does not exist");
    }

    const isPasswordMatchedfromDB = await bcrypt.compare(
      password,
      user.password
    );

    if(isPasswordMatchedfromDB){
      const token = jwt.sign({userId : user._id},"randomsecret");
      return res.status(200).json({
        user : user,
        token : token,
      });
    }
    return res.status(400).send("Incorrect Login credentials");

    

  // if email and password match from DB, return success
  
};

const signupUser = async (req, res) => {
  const {name, email, password, cnf_password} = req.body;

  if(password !== cnf_password){
    return res.status(400).send("The password don't match.");
  }

  if(password.length < 8){
    return res.status(400).send("Create stronger Password");
  }

  const userExists = await UserModel.findOne({email : email});

  if(!userExists){
    //Create a User
    const hashedPassword = await bcrypt.hash(password, 10);

      const user = new UserModel({
        name : name,
        email : email,
        password : hashedPassword,
      });

      const savedUser = await user.save();

      const token = jwt.sign({userId : savedUser._id},"randomsecret");

      return res.status(200).json({
        token : token,
        user : savedUser,
      });
    
  }
  else{
    return res.status(400).send("User Already Exists.");
  }
  
};



module.exports = {
  loginUser,
  signupUser,
  
};
