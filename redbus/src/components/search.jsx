import bus from "../assets/bus.png";
import cal from "../assets/calendar.png";
import search from "../assets/search.png";


const Search=()=>{
return <div style={{border:"2px solid lightgrey",display:"flex",justifyContent:"flex-start",alignItems:"center",borderRadius:"15px",width:"73%"}}>


    <div style={{borderRight:"2px solid lightgrey",display:"flex",justifyContent:"center",alignItems:"center",padding:"19px",gap:"5px",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px" }}> 
        <img src={bus} style={{width:"20px",height:"20px"}}/>
        <input type="search" placeholder="From" value="" onChange="sda" style={{border:"none",outline:"none"}}/>
        </div>
      
  <div style={{borderRight:"2px solid lightgrey",display:"flex",justifyContent:"center",alignItems:"center",padding:"19px",gap:"5px", }}> 
        <img src={bus} style={{width:"20px",height:"20px"}}/>
        <input type="search" placeholder="To" value="" onChange="sda" style={{border:"none",outline:"none"}}/>
        </div>

<div style={{borderRight:"2px solid lightgrey",display:"flex",justifyContent:"center",alignItems:"center",padding:"7px 20px",gap:"10px" }}> 
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

<div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
<img src={search} style={{fontWeight:"bolder",width:"23px",height:"23px",backgroundColor:"#d63941",borderRadius:"20px",padding:"10px"}}/>
</div>

</div>


}
export default Search;