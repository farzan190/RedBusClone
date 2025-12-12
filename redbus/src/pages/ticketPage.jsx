import Ticket from "../components/ticket";
import Filter from "../components/filter";
import Header from "../components/header";
import Search from "../components/search";
import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import offer3 from "../assets/offer3.png";
import offer4 from "../assets/offer4.png";
import right from "../assets/rightArrow.png";
import left from "../assets/leftArrow.png";
import greaterThan from "../assets/greaterThan.png";
import ViewSeats from "./viewSeats";

const TicketPage=()=>{

return  <div> 
<ViewSeats/>

<div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"25px", overflowY: "hidden",marginLeft:"0px",marginRight:"0px"}}>

<Header/>

<div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",gap:"25px",width:"73%"}}>
<div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"15px",border:"",width:"73%"}}>
<img src={left} style={{height:"25px",width:"25px"}}/>
<div style={{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column",gap:"5px",}} >
<div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"large",fontWeight:"600",gap:"10px"}}>
<div className="from">Mumbai</div>
<img src={right} style={{height:"20px",width:"17px"}}/>
<div className="To">Delhi</div>
</div>
<div style={{color:"grey",fontSize:"medium"}}>13 buses</div>
</div>
</div>

<div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"small",gap:"10px"}}>
  <div>Home</div>
  <img src={greaterThan} style={{width:"12px",height:"12px"}}/>
  <div>Bus Booking</div>
  <img src={greaterThan} style={{width:"12px",height:"12px"}}/>
  <div style={{fontWeight:"600"}}>Mumbai to Delhi Bus</div>  

</div>
</div>


<div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
<Search />
</div>

<div style={{display:"flex",justifyContent:"center",alignItems:"flex-start",gap:"50px"}}>

<Filter/>


<div className="right" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%",}}>
<div classNames="offers" style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"15px",width:"100%",marginBottom:"20px",}}>
<img src={offer1} style={{width:"170px", height:"150px",borderRadius:"15px"}}/>
<img src={offer2}style={{width:"170px", height:"150px",borderRadius:"15px"}}/>
<img src={offer3}style={{width:"170px", height:"150px",borderRadius:"15px"}}/>
<img src={offer4} style={{width:"170px", height:"150px",borderRadius:"15px"}}/>

</div>


<div className="ticketHeader" style={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px dotted lightgrey",width:"100%",padding:"10px",borderRadius:"10px",marginTop:"auto",marginBottom:"0px",zIndex:"10"}}>
<div style={{fontWeight:"700",fontSize:"medium"}}>15 buses found</div>
<div style={{display:"flex",justifyContent:"space-between"}}>  
<div style={{fontWeight:"700",fontSize:"medium",marginRight:"10px"}}>Sort by:</div>
<div style={{display:"flex",gap:"20px",marginLeft:"10px",marginRight:"10px"}}>
<div style={{fontWeight:"500",fontSize:""}}>Ratings</div>
<div style={{fontWeight:"500",fontSize:""}}>Departure time</div>
<div style={{fontWeight:"500",fontSize:""}}>Price</div>
</div>
</div>
</div>
<div className="greenDrop" style={{display:"flex",justifyContent:"flex-start",alignItems:"center",border:"1px dotted lightgrey",backgroundColor:"#adf2b3",padding:"10px",marginTop:"-5px",width:"100%"}}>
<span style={{fontWeight:"600"}}>16000+</span> searches on this route last month              
</div>
<Ticket/>

</div>

</div>

</div>
</div>




}
export default TicketPage;