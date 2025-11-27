const {ticket,getTicket,findRoute}=require("../controllers/ticket")
const express=require("express");

const router=express.Router();

router.post("/",ticket);
router.get("/",getTicket);
router.post("/",findRoute);


module.exports=router;

