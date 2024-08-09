import "./App.css";

{/*}
import Firstcomponent from "./firstcomponent";
import Third from "./ThirdComponent";
import Second from "./Second";
import Fourth from "./Fourth";
import Nav from "./Nav";
;*/}
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Landing from "./Landing";
import Login from "./login";
import Signup from "./SignUp";
import Registration from "./formlogin";
import CounterUse from "./counter";
import HotelList from "./Hotel";
import DestinationlList from "./destinationP"
import Home from "./Home";
import Destination from "./Destination";
import TravelPackages from "./Travelpackages";
import Hotels from "./Hotels";
import HotelIndividual from "./Hotelindividual";
import Reviews from "./Reviews";
import TravelPackIn from "./TravelPackagesIndi";
import Profile from "./Profile";
import DashboardHome from "./Dashboard/DashboardHome";
function App() {
  return (
    <>
  <div>
  <BrowserRouter>
  <Routes>
    {/*<Route path="/" element={<Firstcomponent/>}/>
    <Route path="/second" element={<Second/>}/>
    <Route path="/third" element={<Third/>}/>
    <Route path="/fourth" element={<Fourth/>}/>*/}
    <Route path="/" element={<Landing/>}/>
    <Route path="/login" element={<Login/>}/> 
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/form" element={<Registration/>}/>
    <Route path="/counter" element={<CounterUse/>}/>
 
    <Route path="/hotel" element={<HotelList/>}/>
   <Route path="/destinations" element={<DestinationlList/>}/>
    <Route path="/destination" element={<Destination/>}/> 
    <Route path="/home" element={<Home/>}/>
    <Route path="/travelpackages" element={<TravelPackages/>}/>
    <Route path="/travelpackages/:id" element={<TravelPackIn/>}/>
    <Route path="/hotels" element={<Hotels/>}/>
    <Route path="/hotels/:id" element={<HotelIndividual/>}/>
    <Route path="/reviews" element={<Reviews/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/admin/*" element={<DashboardHome/>}/>
   


    
  
  </Routes>
  </BrowserRouter>
  
</div>  
   
  
    
    </>
  );
}

export default App;