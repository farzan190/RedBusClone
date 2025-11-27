import fam from "../assets/family.png"

const bannerthree=()=>{

    return <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#adf2b3",marginBottom:"10px",padding:"10px"}}>
        <div style={{gap:"10px"}}>
        <div style={{fontWeight:"700",fontSize:"20px"}}>25,000+ people booked from Bhopal</div>
         <div>on redBus last month</div>
         </div>

          <img src={fam} style={{ width:"150px",height:"100px",}}/>

    </div>
}
export default bannerthree;