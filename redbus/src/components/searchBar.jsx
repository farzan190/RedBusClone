import bus from "../assets/bus.png";
import cal from "../assets/calendar.png";
import woman from "../assets/woman.png";
import search from "../assets/search.png";


const SearchBar=()=>{


     const handleChange=()=>{
        return <div>hell</div>
     }

    return <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"20px",}}>
     
         <div classname="search" style={{display:"flex",justifyContent:"Center",alignItems:"center",border:"2px solid lightgrey",padding:"25px",paddingBottom:"45px",borderRadius:"25px",marginTop:"-80px",backgroundColor:"white", boxShadow: "0 4px 10px rgba(0,0,0,0.2)"}}>


    <div style={{border:"2px solid lightgrey",display:"flex",justifyContent:"center",alignItems:"center",padding:"19px",gap:"5px",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px",borderRight:"none" }}> 
        <img src={bus} style={{width:"20px",height:"20px"}}/>
        <input type="search" placeholder="From" value="" onChange="sda" style={{border:"none",outline:"none"}}/>
        </div>

  <div style={{border:"2px solid lightgrey",display:"flex",justifyContent:"center",alignItems:"center",padding:"19px",gap:"5px",borderRight:"none" }}> 
        <img src={bus} style={{width:"20px",height:"20px"}}/>
        <input type="search" placeholder="To" value="" onChange="sda" style={{border:"none",outline:"none"}}/>
        </div>

<div style={{border:"2px solid lightgrey",display:"flex",justifyContent:"center",alignItems:"center",padding:"7px 20px",gap:"10px",borderTopRightRadius:"10px",borderBottomRightRadius:"10px" }}> 
        <img src={cal} style={{width:"20px",height:"20px"}}/>
       <div>
        <div>Date of Journey</div>
        <div style={{fontWeight:"600"}}>{new Date().toLocaleDateString("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
})
}</div>
</div>
<button style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px 10px",borderRadius:"18px",border:"none",fontWeight:"600",backgroundColor:"pink"}}>Today</button>
<button style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px 10px",borderRadius:"18px",border:"none",fontWeight:"600",backgroundColor:"peachpuff"}}>Tomorrow</button>
  
        </div>

 <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"7px",border:"2px solid lightgrey", padding:"7px 20px",borderRadius:"10px",marginLeft:"5px"}}>
    <img src={woman}/>
    <div>Booking for women<br/>
     know more</div>
 </div>

    </div>
     <button classname="searchBuses" style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px",fontSize:"15px",color:"white",fontWeight:"600",backgroundColor:"#d63941",border:"none",borderRadius:"30px",padding:"14px",width:"20%",height:"5%",marginTop:"-44px"}}>
      <img src={search} style={{width:"20px",height:"20px", }}/>  
     <div> Search buses</div>     
     </button>
     
</div>
      



}

export default SearchBar;