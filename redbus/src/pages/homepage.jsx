import banner from "../assets/banner.png";
import SearchBar from "../components/searchBar";
import BannerTwo from "../components/banner";
import Gap from "../components/gap";
import Bannerthree from  "../components/bannerthree";
import Header from "../components/header";


const Homepage=()=>{
    return <div> 
       <Header/>
     <div style={{position:""}}>
    <img src={banner} style={{display:"flex",width:"100%",height:"100%",position:"",}}/>
     </div>
<SearchBar/>
<Gap/>
<BannerTwo/>
<Bannerthree/>



</div>


}

export default Homepage;