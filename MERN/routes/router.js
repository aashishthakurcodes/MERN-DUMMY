const express = require("express");
const router=express.Router();
const prodctControl =require('../Controller/ProductControl')

router
.get("/",prodctControl.getall)
.get("/:id", prodctControl.getData)
.post("/", prodctControl.createUser)

.put("/:id", prodctControl.patchdata)

.delete("/:id", prodctControl.deleteItem)
 exports.router=router;