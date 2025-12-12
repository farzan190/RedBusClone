const {ticket,getTicket,findRoute}=require("../controllers/ticket")
const {seatArrangement,seatInfo}=require("../controllers/seat")

const express=require("express");

const router=express.Router();

router.post("/",ticket);
router.get("/",getTicket);
router.post("/",findRoute);
router.post("/",seatArrangement);
router.post("/",seatInfo);



module.exports=router;

