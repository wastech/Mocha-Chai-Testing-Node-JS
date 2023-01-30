const router = require('express').Router();

const {postUserInfo,getUserinfo,getSingleUserInfo,deleteUser,updateUserInfo} = require("../controller/user");

// to create user
router.post("/postuserinfo",postUserInfo);

// to get all the user list
router.get("/getuserinfo",getUserinfo);

// to get single user
router.get("/singleuser/:userid",getSingleUserInfo);


// to update user info

router.put("/updateuser/:id",updateUserInfo);

// to delete user

router.delete("/deleteuser/:id",deleteUser);




module.exports = router;