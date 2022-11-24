const express = require("express")
const router = express.Router()
const { home, createUser, editUser, deleteUser } = require('../controllers/userControllers');


router.get("/", home)
router.post("/createUser", createUser)

router.post('/editUser', editUser)
router.post('/deleteUser', deleteUser)

module.exports = router