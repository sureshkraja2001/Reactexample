import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Components/Navbars';
import Slider from './Components/Slider';
import Login from './Components/Login';
import Cards from './Components/Cards';
import Button from 'react-bootstrap/Button';
import { Register } from './Components/Register';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import DashBoard from './Components/DashBoard';
import MobilePage from './Components/MobliePage';
import ProductPage from './Components/ProductPage';
import ProductFilter from './Components/ProductFilter';
import Addtocart from './Components/Addtocart';
import  Search  from './Components/Search';
import Buynow from './Components/Buynow';



function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/MobilePage" element={<MobilePage/>}></Route>
        <Route path="/product/:product_id" element={<ProductPage/>}></Route>
        <Route path="/Addtocart" element={<Addtocart/>}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/Buynow" element={<Buynow />}></Route>

        <Route path="/tv"element={<ProductFilter value={"Electronics|HomeTheater,TV&Video|Televisions|SmartTelevisions"}/>}></Route>
        <Route path="/mobile"element={<ProductFilter value={"Electronics|Mobiles&Accessories|Smartphones&BasicMobiles|Smartphones"}/>}></Route>
        <Route path="/cables"element={<ProductFilter value={"Computers&Accessories|Accessories&Peripherals|Cables&Accessories|Cables|USBCables"}/>}></Route>
        <Route path="/adapter"element={<ProductFilter value={"Computers&Accessories|NetworkingDevices|NetworkAdapters|WirelessUSBAdapters"}/>}></Route>
        <Route path="/remote"element={<ProductFilter value={"Electronics|HomeTheater,TV&Video|Accessories|RemoteControls"}/>}></Route>
        <Route path="/Appliances"element={<ProductFilter value={"Home&Kitchen|Kitchen&HomeAppliances|SmallKitchenAppliances|SandwichMakers"}/>}></Route>
        <Route path="/fans"element={<ProductFilter value={"Home&Kitchen|Heating,Cooling&AirQuality|Fans|CeilingFans"}/>}></Route>
        <Route path="/headphone"element={<ProductFilter value={"Electronics|Headphones,Earbuds&Accessories|Headphones|In-Ear"}/>}></Route>
        <Route path="/watch"element={<ProductFilter value={"Electronics|WearableTechnology|SmartWatches"}/>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  );
}
export default App;


