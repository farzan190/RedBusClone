const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  columnsLeft: Number,
  columnsRight: Number,
  rows: Number,

  seatTypeLeft: {
    type: String,
    enum: ["seater", "sleeper"]
  },

  seatTypeRight: {
    type: String,
    enum: ["seater", "sleeper"]
  }

});


const seatSchema = new mongoose.Schema({
  busId: {
   type:mongoose.Schema.Types.ObjectId,
   ref:"Bus",
  },
  seatId: String,
  side: { type: String, enum: ["left", "right"] },

  row: Number,
  column: Number,

  type: { type: String, enum: ["seater", "sleeper"] },

  genderRestriction: { 
    type: String, 
    enum: ["none", "male", "female"], 
    default: "none" 
  },

  
});


module.exports = {
  Bus: mongoose.model("Bus", busSchema),
  Seat: mongoose.model("Seat", seatSchema)
};
