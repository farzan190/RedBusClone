import greenStar from "../assets/greenStar.png";
import blackStar from "../assets/blackStar.png";

const Review=()=>{
return <div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div style={{fontSize:"1.6rem",fontWeight:"600"}}>Ratings & reviews</div>
<div style={{color:"green",fontSize:"1.5rem",fontWeight:"700",display:"flex",justifyContent:"center",alignItems:"center"}}>
<img src={greenStar} style={{width:"20px" , height:"20px",gap:"10px"}}/>
<div>4.8</div>
</div>
</div>
<div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",color:"grey",fontSize:"13px"}}>784 Ratings</div>

<div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px",flexDirection:"column"}}>

  

 <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}}>
  <div>5</div>
  <img src={blackStar} style={{width:"12px" ,height:"12px"}}/>
  <div className="progressBar" style={{width:"30rem" ,height:"7px",borderRadius:"12px",backgroundColor:"lightgrey"}}>
  <div style={{width:"60%" ,height:"7px",backgroundColor:"black",borderRadius:"12px"}}></div> 
  </div> 
  <div>90%</div>
  </div>

 <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}}>
  <div>4</div>
  <img src={blackStar} style={{width:"12px" ,height:"12px"}}/>
  <div className="progressBar" style={{width:"30rem" ,height:"7px",borderRadius:"12px",backgroundColor:"lightgrey"}}>
  <div style={{width:"10%" ,height:"7px",backgroundColor:"black",borderRadius:"12px"}}></div> 
  </div> 
  <div>6%</div>
  </div>

 <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}}>
  <div>3</div>
  <img src={blackStar} style={{width:"12px" ,height:"12px"}}/>
  <div className="progressBar" style={{width:"30rem" ,height:"7px",borderRadius:"12px",backgroundColor:"lightgrey"}}>
  <div style={{width:"30%" ,height:"7px",backgroundColor:"black",borderRadius:"12px"}}></div> 
  </div> 
  <div>2%</div>
  </div>

 <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}}>
  <div>2</div>
  <img src={blackStar} style={{width:"12px" ,height:"12px"}}/>
  <div className="progressBar" style={{width:"30rem" ,height:"7px",borderRadius:"12px",backgroundColor:"lightgrey"}}>
  <div style={{width:"60%" ,height:"7px",backgroundColor:"black",borderRadius:"12px"}}></div> 
  </div> 
  <div>1%</div>
  </div>

 <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}}>
  <div>1</div>
  <img src={blackStar} style={{width:"12px" ,height:"12px"}}/>
  <div className="progressBar" style={{width:"30rem" ,height:"7px",borderRadius:"12px",backgroundColor:"lightgrey"}}>
  <div style={{width:"20%" ,height:"7px",backgroundColor:"black",borderRadius:"12px"}}></div> 
  </div> 
  <div>1%</div>
  </div>
</div>


<div style={{fontWeight:"600",fontSize:"17px",marginBottom:"10px",}}>Loved by travelers </div>
<div >
<button style={{marginBottom:"10px",marginRight:"10px",border:"none",backgroundColor:"#ADF2B3",padding:"6px",borderRadius:"5px",fontWeight:"600",color:"#454545",fontSize:"13px"}}>Staff behavior (527)</button>
<button style={{marginBottom:"10px",marginRight:"10px",border:"none",backgroundColor:"#ADF2B3",padding:"6px",borderRadius:"5px",fontWeight:"600",color:"#454545",fontSize:"13px"}}>Punctuality (478)</button>
<button style={{marginRight:"10px",marginBottom:"10px",border:"none",backgroundColor:"#ADF2B3",padding:"6px",borderRadius:"5px",fontWeight:"600",color:"#454545",fontSize:"13px"}}>Cleanliness (410)</button>
<button style={{marginBottom:"10px",marginRight:"10px",border:"none",backgroundColor:"#ADF2B3",padding:"6px",borderRadius:"5px",fontWeight:"600",color:"#454545",fontSize:"13px"}}>Seat comfort (378)</button>
<br/>
<button style={{marginRight:"10px",border:"none",backgroundColor:"#ADF2B3",padding:"6px",borderRadius:"5px",fontWeight:"600",color:"#454545",fontSize:"13px"}}>Driving (349)</button>
<button style={{marginRight:"10px",border:"none",backgroundColor:"#ADF2B3",padding:"6px",borderRadius:"5px",fontWeight:"600",color:"#454545",fontSize:"13px"}}>Rest stop hygiene (310)</button>
<button style={{marginRight:"10px",border:"none",backgroundColor:"#ADF2B3",padding:"6px",borderRadius:"5px",fontWeight:"600",color:"#454545",fontSize:"13px"}}>AC (286)</button>
<button style={{marginRight:"10px",border:"none",backgroundColor:"#ADF2B3",padding:"6px",borderRadius:"5px",fontWeight:"600",color:"#454545",fontSize:"13px"}}>Live tracking (253)</button>
</div>

<button style={{backgroundColor:"#fed9d5",fontWeight:"600",fontSize:"17px",border:"none",borderRadius:"18px",width:"100%",margin:"0px 0px",padding:"10px 20px"}}>Read All 310 Reviews</button>
</div>
}
export default Review;