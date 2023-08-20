import Slider from "./Slider";
import Navbars from "./Navbars";
import Cards from "./Cards";
import { Button } from "react-bootstrap";
// import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";



function DashBoard(){
  const Navigate=useNavigate()

    return(
        <>
        
        <Navbars/>
        <Banner/>

        <Slider />
        <Cards value={"Electronics|HomeTheater,TV&Video|Televisions|SmartTelevisions"}/>
        <span><Button variant="warning" style= {{ marginLeft:"87%" }}onClick={()=>Navigate('/tv') } >
        SEE MORE......</Button>
</span>
        <Cards value={"Electronics|Mobiles&Accessories|Smartphones&BasicMobiles|Smartphones"}/>
        <span><Button variant="warning" style={{ marginLeft:"87%" }}onClick={()=>Navigate('/moblies') }>
        SEE MORE......</Button>
</span>

        <Cards value={"Computers&Accessories|Accessories&Peripherals|Cables&Accessories|Cables|USBCables"}/>
        <span><Button variant="warning" style={{ marginLeft:"87%" }}onClick={()=>Navigate('/cables') } >
        SEE MORE......</Button>
</span>

        <Cards value={"Computers&Accessories|NetworkingDevices|NetworkAdapters|WirelessUSBAdapters"}/>
        <span><Button variant="warning" style={{ marginLeft:"87%" }}onClick={()=>Navigate('/adapter') } >
        SEE MORE...... </Button>
</span>

        <Cards value={"Electronics|HomeTheater,TV&Video|Accessories|RemoteControls"}/>
        <span><Button variant="warning" style={{ marginLeft:"87%" }}onClick={()=>Navigate('/remote') } >
        SEE MORE......</Button>
</span>

        <Cards value={"Home&Kitchen|Kitchen&HomeAppliances|SmallKitchenAppliances|SandwichMakers"}/>
        <span><Button variant="warning" style={{ marginLeft:"87%" }}onClick={()=>Navigate('/Appliances') } >
        SEE MORE......</Button>
</span>

        <Cards value={"Home&Kitchen|Heating,Cooling&AirQuality|Fans|CeilingFans"}/>
        <span><Button variant="warning" style={{ marginLeft:"87%" }}onClick={()=>Navigate('/fans') } >
        SEE MORE......</Button>
</span>

        <Cards value={"Electronics|Headphones,Earbuds&Accessories|Headphones|In-Ear"}/>
        <span><Button variant="warning" style={{ marginLeft:"87%" }}onClick={()=>Navigate('/headphone') } >
        SEE MORE......</Button>
</span>

        <Cards value={"Electronics|WearableTechnology|SmartWatches"}/>
        <span><Button variant="warning" style={{ marginLeft:"87%" }}onClick={()=>Navigate('/watch') } >
        SEE MORE......</Button>
</span>






        
        </>
    )
}
export default DashBoard;