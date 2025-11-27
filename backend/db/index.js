const mongoose=require("mongoose");
const db=new mongoose.Schema({
    busName:{
        type:String,
        unique:true,

    },
    busDetails:{
        type:String,

    },
    Date:{
        type:String,
    }
    ,
     route:[
          {
            citname:String,
             boardingPoints:[{
               pointName:String,
               time:String,
               }
             ],
          }
     ]
,
    rating:{
        type:Number,
    },

    availableSeats:[{
            seatnumber:String,
            available:Boolean,
        }
    ],
    price:{
        type:Number,
    }
     


})

 module.exports=mongoose.model("ticket",db);
