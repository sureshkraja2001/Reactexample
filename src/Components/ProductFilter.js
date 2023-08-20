import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import axios from "axios";
import  './ProductFilter.css'
import Navbars from "./Navbars";
import { Height } from "@mui/icons-material";
import { height } from "@mui/system";



// function ProductFilter(){

    const ProductFilter = (props) => {
        const [data, setdata] = useState([]);
        // const navigate = useNavigate();
      
        const { product_id } = useParams();
        const Api = `http://localhost:3000/product?product=${product_id}`;
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
        const decressqnty = (data) => {
          data.quantity = data.quantity - 1;
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
            id:product.product_id,
            name: product.product_name,
            image:product.img_link,
            actual_price: product.actual_price,
          discounted_price: product.discounted_price,
          discount_percentage: product.discount_percentage,
          quantity:1
            
        }
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
          axios.get(`${Api}`).then((r) => {
            console.log(r.data);
            setdata(r.data);
          });
        }, []);
        const navigate = useNavigate();

let more=props.value;

        const finder = data.filter((prod) => {
            return prod.category === more;
          });
    return(
      
       <>
       <Navbars/>

       
             <div className=" sks">
              
        {finder.map((e) => {
          return (
            <div
              className="carddi cursor-pointer border-radius-9"
              role="button"
            >
              <Card className="mt-4 " roll="button" style={{ width: '25rem',height:"95%",marginTop:"20px" }}
                            onClick={() => navigate(`/product/${e.product_id}`)}

              >
                <Card.Img variant="top" src={e.img_link} />
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

              <div className="btnes">
                    <Button variant="danger"  onClick={()=> checkcart(e)}className="soc">Add to cart</Button>
                    <Button  variant="success" onClick={()=>navigate ("/Buynow")}className="soc1">buy now</Button>
                    
                  </div>

            </div>
          );
        })}
      </div>
       </>
    )
}
export default ProductFilter; 