const express = require("express");
const {
  registerUser,
  CurrentUser,
  LoginUser,
} = require("../controllers/userController");
const  validateToken = require("../middleware/validateTokenHandler")

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", LoginUser);

router.get("/current", validateToken,CurrentUser);

module.exports = router;