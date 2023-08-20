import axios from "axios"
import { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { useLocation, useNavigate,useParams} from "react-router-dom";
import './Search.css';

import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
// import { Button } from "bootstrap";
import Button from 'react-bootstrap/Button';
import Navbars from "./Navbars";







const Search=()=>{

    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get("q");
        const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState([]);
    console.log("query", searchQuery);
  
    const addToCart = (data) => {
      axios
        .post("http://localhost:3000/cart", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const updateqnty = (data) => {
      data.quantity = data.quantity + 1;
      axios
        .put(`http://localhost:3000/cart/${data.id}`, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const checkcart = (product) => {
      let data = {
        id: product.product_id,
        name: product.product_name,
        image: product.img_link,
        actual_price: product.actual_price,
        discounted_price: product.discounted_price,
        discount_percentage: product.discount_percentage,
  
        quantity: 1,
      };
      axios
        .get(`http://localhost:3000/cart/${product.product_id}`)
        .then((res) => {
          updateqnty(res.data);
        })
        .catch((err) => {
          console.log(err);
          addToCart(data);
        });
    };
    useEffect(() => {
      // Function to fetch data from the API based on the searchQuery
      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://localhost:3000/product?q=${searchQuery}`
          );
  
          const data = await response.json();
          setSearchResults(data);
          //   console.log("mairiu", response);
          //   console.log("ol:", data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      // Only fetch data if there's a valid searchQuery
      if (searchQuery) {
        fetchData();
      }
    }, [searchQuery]);
    console.log("rr", searchResults);
    const { product_id } = useParams();
    console.log("s",searchQuery)
  
    useEffect(() => {
      axios
        .get(`http://localhost:3000/product?product=${product_id}`)
        .then((res) => {
          console.log(res);
          //   console.log(res.data);
        });
    }, []);

    return(

<>
<Navbars />

<h2>Search For Result:{searchQuery}</h2>
<div>


        {searchResults.map((e) => {

          return (
            <div
            className="carddi cursor-pointer border-radius-9"
            role="button"
          >
            <Card className="mt-4 " roll="button" style={{ width: '25rem',height:"100%",marginTop:"20px" }}
             onClick={() => navigate(`/product/${e.product_id}`)}
                        

            >
              <img variant="top" src={e.img_link} />
              <Card.Body>
                <Card.Title>{e.product_name}</Card.Title>
                <Card.Text>{e.review_title}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  discounted price:{e.discounted_price}
                </ListGroup.Item>
                <ListGroup.Item>actual price:{e.actual_price}</ListGroup.Item>
                <ListGroup.Item>
                  discount percentage:{e.discount_percentage}
                </ListGroup.Item>
              </ListGroup>

      
              <Card.Body>
              
              </Card.Body>
            </Card>


                  <Button variant="danger" className="voc" onClick={()=> checkcart(e)}>Add to cart</Button>{' '}
                  <Button  variant="success" className="voc1"onClick={()=> navigate('/Buynow')}>buy now</Button>{' '}
                  
            

{/* <button variant="danger"  onClick={()=> checkcart(e)}>Add to cart</button>
        <button variant="success">Buy  Now</button> */}

          </div>
        );
      })}
    </div>
     </>


    )
    
}
export default Search;