
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from "./pages/homepage";
import TicketPage from "./pages/ticketPage";
import "./App.css";



function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path={"/"} element={<Homepage/>}/>
    <Route path={"/ticket"} element={<TicketPage/>}/>
  </Routes>
  </BrowserRouter>

    


  )




}

export default App;
