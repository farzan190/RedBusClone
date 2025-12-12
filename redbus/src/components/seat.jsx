import {useState,useEffect} from "react";
import single from "../assets/single.png";
import sleeper from "../assets/sleeper.png";


const Seat=()=>{
     const [seats,setSeats]=useState();
     useEffect(()=>{
     async function seatArrangement(){
     const seatsData= await fetch("http://localhost:8000/seatInfo").then((res)=>res.json());
     setSeats(seatsData);
}
seatArrangement();
},[])


// we are getting 40 seats
console.log("leftsideseats",seats);

const leftSeats=seats?.filter((seat)=>{
   if (seat.side=="left"){
    return seat;
   }

});
console.log("leftsideseats",leftSeats);

const rightSeats=seats?.filter((seat)=>{
   if (seat.side=="right"){
    return seat;
   }

});

console.log("right",rightSeats);

















    return <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}}>

          <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}}>
        <div style={{display:"flex",justifyContent:"center", alignItems:"center",flexDirection:"column",gap:"5px"}}>{
        leftSeats?.slice(0,10).map((seat)=>{
           return <button style={{backgroundColor:"transparent",border:"none"}}>{seat.type=="seater"?<img src={single}/> : <img src={sleeper}/>}</button>
                           
        
    })}</div>

<div style={{display:"flex",justifyContent:"center", alignItems:"center",flexDirection:"column",gap:"5px"}}>{
  leftSeats?.slice(10,20).map((seat)=>{
           return <div>{seat.type=="sleeper"?<img src={sleeper}/> : <img src={single}/>}</div>
  })

       }</div></div>

     

<div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}}>
<div style={{display:"flex",justifyContent:"center", alignItems:"center",flexDirection:"column",gap:"5px"}}>{
         rightSeats?.slice(0,10).map((seat)=>{
           return <div>{seat.type=="seater"?<img src={single}/> : <img src={sleeper}/>}</div>
         })
       }</div>

<div style={{display:"flex",justifyContent:"center", alignItems:"center",flexDirection:"column",gap:"5px"}}>{
        
rightSeats?.slice(10,20).map((seat)=>{
           return <div>{seat.type=="seater"?<img src={single}/> : <img src={sleeper}/>}</div>
         })

        }</div>
</div>








    </div>


}

export default Seat;