import bus1 from "../assets/bus1.png";
import bus2 from "../assets/bus2.png";
import bus3 from "../assets/bus3.png";
import menu from "../assets/menu.png";
import question from "../assets/question.png";
import user from "../assets/user.png";


const Header=()=>{
return   <div classname="header" style= {{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"10px 130px" , 
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
    width:"82.5%",
}}>

  <div classname="header-left" style={{
    display:"flex",
    justifyContent:"space-between",
    gap:"25px"
  }}> 

     <div style={{display:"flex", flexDirection:"column", }}>
     <img src={bus1} alt="b1" style={{
        height:"50px",
        width:"50px",
     }}/>
    </div>

     <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems: "center"}}>
     
     <img src={bus2} alt="b2" style={{
        height:"30px",
        width:"40px",
 }}/>
      <div style={{fontWeight:"600",fontSize:"small"}}>Bus Tickets</div>
 </div >

     <div style={{display:"flex", flexDirection:"column",alignItems: "center"}}>
     <img src={bus3} alt="b3" style={{
        height:"30px",
        width:"50px",
 }}/>
   <div style={{fontWeight:"600",fontSize:"small"}}>  Train Tickets </div>
  </div>

  </div>

<div classname="header-right" style={{
    display:"flex",
    justifyContent:"space-between",
    gap:"25px",
  }}>

    <div classname="icontext" style={{display:"flex",justifyContent:"center",gap:"5px" }}>
     <img src={menu} alt="b1" style={{
        height:"20px",
        width:"20px",
 }}/>
      <div style={{fontWeight:"600",fontSize:"small"}} >Bookings</div>
</div>

<div classname="icontext" style={{display:"flex",justifyContent:"center",gap:"5px"}}>
     <img src={question} alt="b2" style={{
        height:"20px",
        width:"20px",
 }}/>
   <div style={{fontWeight:"600",fontSize:"small"}}> Help</div>
</div>

<div classname="icontext" style={{display:"flex",justifyContent:"center",gap:"5px"}}>
     <img src={user} alt="b3" style={{
        height:"20px",
        width:"20px",
 }}/> 
    <div style={{fontWeight:"600",fontSize:"small"}}> Account</div>
</div>

  </div>
  </div >


}
export default Header;