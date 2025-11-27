import pin from "../assets/pin.png"
import train from "../assets/train.png"

const Banner=()=>{
    return <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px",margin:"20px 230px",backgroundColor:"#f9fafb",gap:"10px",borderRadius:"10px",marginBottom:"35px"}}>
        
         <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}}> 
        <div> Get ₹100 off using code <div style={{color:"green",fontWeight:"600",}}>FESTIVE</div></div>
        <div style={{padding:"10px 80px",border:"1px solid red",borderRadius:"10px"}}>Dec </div>
        <div style={{padding:"10px 80px",border:"1px solid blue",borderRadius:"10px"}}>Jan</div>
        </div>


       <div style={{display:"flex",flexDirection:"column", alignItems:"center",justifyItems:"center",gap:"10px"}}>
  <button style={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"25px",padding:"10px 35px",gap:"5px",border:"none",backgroundColor:"#fed9d5",fontWeight:"600"}}><img src={train} style={{widht:"20px",height:"20px"}}/>Book Trains Now</button>
  <span style={{color:"grey"}}> Authorised IRCTC partner</span>
       </div>


    </div>
}

export default Banner;