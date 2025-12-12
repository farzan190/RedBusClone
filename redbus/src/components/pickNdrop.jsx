const PickNdrop=({board})=>{
console.log("aagaya board ka points",board[0]?.pointName);
console.log("boarding points",board);

return <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
         
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",gap:"40px",marginBottom:"-12px",marginTop:"-12px"}}>     
     <div>{board[0]?.time}</div>
     <div>{board[0]?.pointName}</div>
   </div>

   <div style={{ width: "8px", height: "8px", backgroundColor: "black",borderRadius:"100px" }}>.</div>
   <div style={{ width: "7px", height: "100px", background: "lightGrey" }}></div>

    </div>
    

}







export default PickNdrop;




