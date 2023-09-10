const express=require("express");
const { getAllUser } = require("../controllers/user-controller");

const router=express.Router();

router.get("/",getAllUser)

module.exports= router;