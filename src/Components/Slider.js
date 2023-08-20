import { useNavigate } from "react-router-dom";
import "./Slider.css"
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
    const navigate=useNavigate();
    return (
        <>
<div className="Slider1">
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    
                          <img className="sur1"
                            onClick={()=> navigate('/cables')}src={require("./images/mobile-phone-cable.jpg")} width={"1000px"} height={"500px"}

                        />
                   
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                   
                     <img className="sur1"
                            onClick={()=> navigate('/tv')} src={require("./images/-original-imaghgphymnvxnaf.webp")}width={"1000px"} height={"500px"}
                        />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                   
                    <img className="sur1"
                            onClick={()=> navigate('/fans')} src={require("./images/31g7fxYmBFL._AC_UF894,1000_QL80_.jpg")} width={"1000px"} height={"500px"}
                        />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </>
    )
}
export default Slider;



