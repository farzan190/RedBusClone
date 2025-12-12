 const {Bus,Seat}=require("../db/seat.js");

async function seatArrangement(req,res){
      
const{columnsLeft,columnsRight,rows,seatTypeLeft,seatTypeRight}=req.body
if(!columnsLeft||!columnsRight||!rows||!seatTypeLeft||!seatTypeRight){
        return res.status(400).json({err:"this is empty"})
     } 

  const busSeating=await Bus.create({
  columnsLeft,
  columnsRight,
  rows,
  seatTypeLeft,
  seatTypeRight
  })
      return res.json(busSeating);
 }
 
async function seatInfo(req, res) {
  const bus = await Bus.findOne();
  let seatDetails;
   console.log(bus);
  for (let i = 0; i < bus.columnsLeft; i++) {
    for (let j = 0; j < bus.rows; j++) {
      seatDetails = await Seat.create({
        seatId: `${i}${j}`,
        side: "left",
        row: j,
        column: i,
        type: "seater",
        genderRestriction: "none"
      });
    }
  }

for (let i = 0; i < bus.columnsRight; i++) {
    for (let j = 0; j < bus.rows; j++) {
      seatDetails = await Seat.create({
        seatId: `${i}${j}`,
        side: "right",
        row: j,
        column: i,
        type: "sleeper",
        genderRestriction: "none"
      });
    }
  }

  const seatss=await Seat.find().limit(40);

  return res.json(seatss);
}


 module.exports={seatArrangement,seatInfo};



//seats should give a proper array of left and right sides usme bhi seperate seats mentioned


 