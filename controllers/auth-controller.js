const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const home = async (req, res) => {
  try {
    res.status(200).json("This is home page");
  } catch (error) {
    res.status(400).json("Page not found");
  }
};

// *---------------------------------------
// * ----------User Registration-----------
// *---------------------------------------

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      res.status(400).json({ message: "Email already exist" });
    } else {
      const saltRounds = 10;
      const hash_password = await bcrypt.hashSync(password, saltRounds);

      const userCreated = await User.create({
        username,
        email,
        phone,
        password: hash_password,
      });

      res.status(201).json({
        message: "Registration successfull",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

// *---------------------------------------
// * ----------User Login-----------
// *---------------------------------------

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email: email });
    
    if (userExist) {
      const user = await bcrypt.compare(password, userExist.password);

      // const user=await userExist.comparePassword(password)

      if (user) {
        res.status(200).json({
          message: "Login successfull",
          token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        });
      } else {
        res.status(401).json({ message: "Incorrect password" });
      }
    } else {
      res.status(400).json({ message: "No User Found" });
    }
    // res.status(200).json("this login page");
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

module.exports = { home, register, login };
