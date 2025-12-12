const PickNdrop=({board})=>{

return  <div>{ board.map((point,ind)=>{  

  return  <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>

    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",gap:"40px",marginBottom:"-12px",marginTop:"-12px"}}>     
     <div>{point?.time}</div>
     <div>{point?.pointName}</div>
   </div>

   <div style={{ width: "8px", height: "8px", backgroundColor: "black",borderRadius:"100px" }}>.</div>

  {  ind==board.length-1 ?  "" :<div style={{ width: "7px", height: "100px", background: "lightGrey" }}></div>
}






  </div>})}
  
    </div>

}







export default PickNdrop;




