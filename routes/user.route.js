const express = require("express");
const User = require("../models/user.model.js");
const router = express.Router();
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../controllers/user.controller.js');


router.get('/', getUsers);
router.get("/:address", getUser);

router.post("/", createUser);

// update a user
router.put("/:address", updateUser);

// delete a user
router.delete("/:address", deleteUser);




module.exports = router;