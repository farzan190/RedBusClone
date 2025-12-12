import rightArrow from "../assets/rightArrow.png"
import single from "../assets/single.png"
import sleeper from "../assets/sleeper.png"
import onlyMaleSingle from "../assets/onlyMaleSingle.png"
import onlyMaleSleeper from "../assets/onlyMaleSleeper.png"
import notAvail from "../assets/notAvail.png"
import notAvailSleeper from "../assets/notAvailSleeper.png"
import selectedSingle from "../assets/selectedSingle.png"
import selectedSleeper from "../assets/selectedSleeper.png"
import singleWoman from "../assets/singleWoman.png"
import womanSleeper from "../assets/womanSleeper.png"
import femaleSingle from "../assets/femaleSingle.png"
import maleSingle from "../assets/maleSingle.png"
import bookedSleeperW from "../assets/bookedSleeper.png"
import bookedSleeperM from "../assets/bookedSleeperM.png"
import offer from "../assets/offer.png"

import Seat from "../components/seat.jsx";
import Info from "../components/info.jsx";



const ViewSeats=()=>{

     const seatDemo=[
    {
    "id": 0,
    "title": "Available",
    "img1": single,
    "img2": sleeper,
  },
      {
    "id": 1,
    "title": "Available only for male passenger",
    "img1": onlyMaleSingle,
    "img2": onlyMaleSleeper,
  },
  {
    "id": 2,
    "title": "Already booked",
    "img1": notAvail,
    "img2": notAvailSleeper,
  },
  {
    "id": 3,
    "title": "Selected by you",
    "img1": selectedSingle,
    "img2": selectedSleeper,
  },
  {
    "id": 4,
    "title": "Available only for female passenger",
    "img1": singleWoman,
    "img2": womanSleeper,
  },
  {
    "id": 5,
    "title": "Booked by female passenger",
    "img1": singleWoman,
    "img2": bookedSleeperW
  },
  {
    "id": 6,
    "title": "Booked by male passenger",
    "img1": maleSingle,
    "img2": bookedSleeperM
  }
];



    return     <div>
    <div style={{ overflowY: "auto",position:"fixed",zIndex:"9999" ,border:"2px solid black",width:"100%",height:"100%",backgroundColor:"white",marginTop:"3%",borderRadius:"20px"}}>

<div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"5px",marginTop:"30px",marginLeft:"30px",marginBottom:"30px"}}>
  <div>Mumbai</div>
  <img src={rightArrow} style={{width:"15px",height:"15px"}}/>
  <div>Delhi</div>
</div>

<hr/>

<div style={{display:"flex" ,justifyContent:"center", alignItems:"center" , gap:"15px" , fontWeight:"600" ,}}>
<div>1. Select seats</div>
<div>2. Board/Drop point</div>
<div>3. Passenger Info</div>
</div>

<hr/>

<Info/>


<div style={{margin:"30px"}}><Seat/></div>




<div >Know your seat types</div>


<div style={{display:"flex" , justifyContent:"space-between" ,alignItems:"center", borderRadius:"10px" ,padding:"10px",borderBottom:"1px solid lightgrey"}}>

<div>Seat Types</div>
<div style={{display:"flex",gap:"30px" ,alignItems:"center",justifyContent:"center",}}>
<div>Seater</div>
<div>Sleeper</div>
</div>

</div>
<div  className="suggestionBox" style={{border:"1px solid lightgrey", margin:"10px",borderRadius:"12px" }}>
{
  seatDemo.map((item)=>{

    return <div>





<div style={{display:"flex" , justifyContent:"space-between" ,alignItems:"center", borderBottom:"1px solid lightgrey" , borderRadius:"" ,padding:"10px"}}>
<div>{item.title}</div>  
<div style={{display:"flex",gap:"50px" ,alignItems:"center",justifyContent:"center",}}>
<img src={item.img1}/>
<img src={item.img2}/>
</div>
</div>


</div>

  })

}
</div>



    </div>
    </div>

}
export default ViewSeats;

