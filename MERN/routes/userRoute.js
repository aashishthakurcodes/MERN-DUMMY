const express = require("express");
const router=express.Router();
const prodctControl =require('../Controller/User')

router
.get("/",prodctControl.getall)

.get("/:id", prodctControl.getData)
.post("/", prodctControl.createUser)

.patch("/:id", prodctControl.patchdata)

.delete("/:id", prodctControl.deleteItem)
 exports.router=router;