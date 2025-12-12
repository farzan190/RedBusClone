import {useState,useEffect} from "react";
import star from "../assets/star.png"


const Ticket=()=>{
  const [ticketData,setTicketData]=useState([]);
  const[abc,setAbc]=useState(false);

 useEffect(()=>{
   async function fetchTicket(){
   const token=await fetch("http://localhost:8000/getTicket").then((res)=>res.json())
   setTicketData(token.ticketDetails);
   }
    fetchTicket()
 },[])

  


return  <div style={{ fontFamily: "Inter, sans-serif",margin:"",padding:"10px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"20px" }}>
{ 
  ticketData.map((item)=>{
  return <div style={{borderRadius:"20px",padding:"20px",margin:"",boxShadow: "0 4px 10px rgba(0,0,0,0.3)", width:"100%"}}>
 
 <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
 
 <div> 
  <div style={{fontWeight:"700"}}>{item.busName}</div>
  <div style={{color:"grey",fontSize:"small"}}>{item.busDetails}</div>
 </div>

<div className="centerBar" style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"80px"}}> 
<div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundColor:item.rating>3?"lightGreen":"#db8574",padding:"2px",borderRadius:"7px"}} > 
 
 <div style={{color:"white",backgroundColor: item.rating > 3 ? "green" : "#cd2400",padding:"3px",borderRadius:"5px",fontSize:"small",fontWeight:"bold"}}>{item.rating}</div>
 <div style={{fontSize:"small",fontWeight:"bold"}}>{Math.floor(Math.random()*100)}</div>
</div>
<div style={{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"}}>
<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
 <div style={{fontWeight:"700",fontSize:"large"}}> {"20:36"} </div>
  <div>{"--"}</div>
  <div style={{fontSize:"large"}}>{"03:31"}</div>
</div>

<div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"small"}}>
 <div style={{color:"#1d1d1da3"}}> {"30h 55m "}</div>
 <div style={{color:"#1d1d1da3"}}> {" .  35 Seats (11 Single)"}</div>
</div>

</div>
</div>
  

             

<div>
<div style={{fontWeight:"bold"}}>₹{item.price}</div>
<div style={{color:"#1d1d1da3",fontSize:"small"}}>Onwards</div>
</div>
</div>

<hr style={{ borderTop: "1px dotted #ddd" }} />


<div className="ticket" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
  
  <div className="offer" style={{display:"block",fontSize:"small",backgroundColor:"#f7e7df",padding:"5px 7px",borderRadius:"8px",fontWeight:"500",position:"absolute",zIndex:"-10"}}>Minimum 10% off on return ticket</div>
  
  <div className="features" style={{color:"#5258e4",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"small",fontWeight:"600",gap:"15px"}}> 
    <span style={{backgroundColor:"#eaf6fb",padding:"8px 12px",borderRadius:"15px"}}>Why book this bus?</span>  
    <span>Boarding/Dropping Points</span>
    <span>Ratings and Reviews</span>
    <span>Bus Photos</span>
    <span>Cancellation Policies</span>
    </div>


  <button style={{border:"none",borderRadius:"30px",padding:"15px",fontSize:"17px",fontWeight:"600",backgroundColor:"#d63941",color:"whitesmoke"}}>View seats</button>
  </div>
  </div>})
}

</div>
}
export default Ticket;