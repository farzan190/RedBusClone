import woman from "../assets/woman.png";
import search from "../assets/search.png";
import Search from "./search";

const SearchBar=()=>{


     

    return <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"20px",}}>
     
         <div classname="search" style={{display:"flex",justifyContent:"Center",alignItems:"center",padding:"25px",paddingBottom:"45px",borderRadius:"25px",marginTop:"-80px",backgroundColor:"white", boxShadow: "0 4px 10px rgba(0,0,0,0.2)"}}>



<Search/>



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