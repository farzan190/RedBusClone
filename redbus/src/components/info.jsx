import {useState,useEffect} from "react";
import offer from "../assets/offer.png";
import liveTrack from "../assets/liveTrack.png";
import promoAlpha from "../assets/promoAlpha.png";
import electricLogo from "../assets/electric.png";
import liveTrackLogo from "../assets/liveTracking.png";
import Reschedulable from "../assets/Reschedulable.png";
import PickNdrop from "./pickNdrop";
import Rating from "./ratingNReview";




const Info=()=>{
   const [open,setOpen]=useState(false);
   const [exclusive,setExclusive]=useState(false);
   const [promo,setPromo]=useState(false);
   const [electric,setElectric]=useState(false);
   const [liveTracking,setLiveTracking]=useState(false);
   const [boarding,setBoarding]=useState([]);

   useEffect(()=>{
    async function points(){
     const pickNdropPoints=await fetch("http://localhost:8000/getTicket").then((res)=>res.json());
     const points= pickNdropPoints?.ticketDetails[0]?.route[0]?.boardingPoints;
     setBoarding(points);
     console.log("this contain dropping points",boarding)
      }
      points();
     
   },[])


  return <div>
<div>
<button>Why book this bus?</button>
<button>Boarding point</button>
<button>Dropping point</button>
<button>Amenities</button>
<button>Rating and reviews</button>
<button>Booking policy</button>
</div>


<div>Why book this bus?</div>
<div style={{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column",border:"1px solid lightgrey",borderRadius:"10px",margin:"30px",}}>

<div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"10px",borderBottom:"1px solid lightgrey" , width:"100%",padding:"12px 0px"}}>
  <img src={liveTrack} style={{width:"28px" , height:"25px",marginLeft:"20px"}}/>
  <div>Free bus change</div>
  </div>

<div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"10px",borderBottom:"1px solid lightgrey" , width:"100%",padding:"12px 0px"}}onClick={()=>setExclusive((val)=>!val)}>
<img src={offer} style={{width:"28px" , height:"25px",marginLeft:"20px"}}/>Exclusive<br/>Get 5 % Extra OFF
<div>
 <br/>
{exclusive &&<div>Minimum ticket fare : INR 200<br/>
Maximum discount limit : INR 99999
</div>
}</div>
</div>

<div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"10px",borderBottom:"1px solid lightgrey" , width:"100%",padding:"12px 0px"}}onClick={()=>setPromo((val)=>!val)}>
<img src={promoAlpha} style={{width:"28px" , height:"25px",marginLeft:"20px"}}/>
<div>
Unlock Return Trip Promo
{promo &&<ul>
<li> Book now and Unlock min. 10% OFF on your next Indore to Bhopal <br/> booking with NueGo (Partnered by Verma Travels)</li>
<li> Offer applicable for any travel date after 28-Dec-2025</li>
 <li>Book your return trip by 12-Jan-2026 to get the offer</li>
</ul>}
</div>
</div>

<div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"10px",borderBottom:"1px solid lightgrey" , width:"100%",padding:"12px 0px"}} onClick={()=>setElectric((val)=>!val)}>
<img src={electricLogo} style={{width:"28px" , height:"25px",marginLeft:"20px"}}/>
<div>
Electric bus<br/>
{electric &&<div>Every 400 kms travelled via electric buses is equal to planting 2 trees<br/>every year</div>}
</div>
</div>



<div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"10px",borderBottom:"1px solid lightgrey" , width:"100%",padding:"12px 0px"}} onClick={()=>setLiveTracking((val)=>!val)}>
<img src={liveTrackLogo} style={{width:"28px" , height:"25px",marginLeft:"20px"}}/>Live Tracking <br/>
{liveTracking &&<div>You can now track your bus and plan your commute to the boarding<br/> point!Family members and friends 
can also check the bus location to <br/>coordinate pick-ups and rest assured about your safety.</div>
}</div>


<div style={{display:"flex",justifyContent:"flex-start",gap:"10px",alignItems:"center", width:"100%",padding:"12px 0px"}} onClick={()=>setOpen((val)=>!val)}>
<img src={Reschedulable} style={{width:"28px" , height:"25px",marginLeft:"20px"}}/>
Reschedulable<br/>
{open && <div>This bus offers Travel Date Change option test. You can advance or<br/> postpone the ticket to a different date as per your requirement.
Date<br/> change fee will be applicable and you can change the schedule till 1<br/> hours before time of departure.
Change Travel Date is available only till <br/>services are available for future dates.
</div>
}</div>


</div>


<PickNdrop board={boarding}/>
<Rating/>


  </div>
}
export default Info;