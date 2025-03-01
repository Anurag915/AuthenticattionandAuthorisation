const express = require("express");
const router = express.Router();
const User= require("../models/user");
const {auth,isStudent,isAdmin} = require("../middlewares/auth");

const { signup } = require("../controllers/Auth");
const { login } = require("../controllers/Auth");

router.post("/signup", signup);
router.post("/login", login);

//Protected route
router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "welcome to the protected route",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "welcome to the protected route",
  });
});
// Testing Route for Middleware
router.get("/test", auth, (req, res) => {
  res.json({
      success: true,
      message: "Test successful"
  })
});

router.get("/getEmail",auth,async (req,res)=>{
  const id=req.user.id;
  console.log(id);
  const user=await User.findById(id);

  res.json({
    success:true,
    id:id,
    user:user,
    email:req.user.email,
    message:"welcome to the protected route"
  })
});


module.exports = router;
