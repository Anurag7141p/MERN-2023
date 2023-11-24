const express = require("express");
const router = express.Router();
const { home, register, login } = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const {signupSchema,loginSchema} = require("../validators/auth-validator");

router.get("/", home);

router.post("/register", validate(signupSchema), register);
// router.route("/register").post(validate(signupSchema), register);

router.post("/login", validate(loginSchema),login);

module.exports = router;
