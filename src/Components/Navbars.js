import  "./Navbars.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, useSearchParams } from "react-router-dom";
import { SiGravatar } from "react-icons/si"
import {  FaCartArrowDown} from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Popup from './popup';
import axios from "axios"



function Navbars(){
  // const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [_, setSearchParams] = useSearchParams();

  const handleSearch = async (event) => {
    event.preventDefault();
    setSearchParams({ q: searchQuery });

    try {
      const response = await axios.get(
        `http://localhost:3000/product?q=${searchQuery}`
      );
      // Handle the response and update the search results in the UI
      console.log("jbj:", response.data); // Assuming the API returns data in the expected format
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Error fetching search results:", error);
    }
    navigate(`/search?q=${searchQuery}`);
  };

    return(
<>



 <Navbar expand="lg" className="picture5"  >
      <Container>
        
      <div class="search" className="pic">
  <div class="search-box">
    <div class="search-field">
      <input placeholder="Search... "
       value={searchQuery}
       onChange={(e) => setSearchQuery(e.target.value)} class="input" type="text" color="white"/>
      <div class="search-box-icon">
        <button class="btn-icon-content">
          <i class="search-icon" onClick={handleSearch}>
            <svg xmlns="://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#fff"></path></svg>
          </i>
        </button>
      </div>
    </div>
  </div>
</div>
      
        {/* <img src='' className="pic1"/> */}
        <img className="pic1"
                            src={require("./images/Capture.PNG")} />

  

        
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
           <Nav.Link  className="yes"> <FaCartArrowDown  onClick={()=>navigate("/Addtocart")}/></Nav.Link>
            <Nav.Link className="yes1" >    <SiGravatar variant="primary" onClick={handleShow} />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
                  <Popup
 />

        </Offcanvas.Body>
      </Offcanvas>

       
</Nav.Link>
            
            <Nav.Link   className="yes2"> <LuLogIn onClick={() => navigate('/login')}/></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
    
    </>





    )
    
}
export default Navbars;


