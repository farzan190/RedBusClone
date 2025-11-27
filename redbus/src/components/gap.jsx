import train2 from "../assets/train2.png"

const Gap=()=>{
    return <div style={{marginLeft:"230px",display:"flex",justifyContent:"flexStart",alignItems:"center",gap:"10px",marginTop:"60px",marginBottom:"20px"}}>
       <img src={train2}/>
       <div style={{display:"flex",flexDirection:"column",alignItems:"flexStart",gap:"15px"}}>
       <div style={{fontWeight:"700",fontSize:"22px",letterSpacing:"0.2px"}}>Book trains for festivals</div>
       <div style={{color:"Grey"}}>Book now to get confirmed ticket</div>
       </div>

    </div>
}
export default Gap;