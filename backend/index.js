const {ticket,getTicket,findRoute}=require("./controllers/ticket");
const {seatArrangement,seatInfo}=require("./controllers/seat")


const express=require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app=express();
const port=8000;

app.use(express.json());
app.use(cors());
app.use("/createTicket",ticket);
app.use("/getTicket",getTicket);
app.use("/findRoute",findRoute);

app.use("/seatingArrangement",seatArrangement);
app.use("/seatInfo",seatInfo);


mongoose.connect("mongodb://127.0.0.1:27017/redbus")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.listen(port,()=>{console.log("server running on port 8000")})