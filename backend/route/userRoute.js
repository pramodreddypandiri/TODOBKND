const express = require("express");
const router = express.Router();
const {
  home,
  createUser,getUsers,
  editUser,
  deleteUser,
} = require("../controller/userController");
// routes
router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUsers", getUsers);
router.put("/editUser/:id", editUser);
router.delete("/deleteUser/:id", deleteUser);
module.exports = router;
