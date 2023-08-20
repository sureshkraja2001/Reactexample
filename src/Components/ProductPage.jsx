import axios from "axios"
import React, { useEffect } from "react"
import { useState } from "react"
import {useNavigate, useParams} from "react-router-dom"
import  './ProductPage.css'
import { Button } from "react-bootstrap";
import Navbars from "./Navbars";





const ProductPage = () => {
    const { product_id } = useParams();
    const [dat, setdata] = useState([]);
    const navigate =useNavigate();


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
      axios
        .get(`http://localhost:3000/product?product_id=${product_id}`)
        .then((r) => {
          setdata(r.data[0]);
        });
    }, []);
    return (
      <div>
        <Navbars />
        {[dat].map((ele) => {
          return (
            <>
            <div className="procontainer">
              <div className="row">
                <div className="col-md-6">
                  <img src={ele.img_link}
                  style={{width:"60%",height:"80%"}}
                  />
                  </div>
                  <div className="col-md-6">
                    <h2 id="aoc4">{ele.product_name}</h2>
                    <p id="aoc5">{ele.about_product}</p>
                    <h3 style={{color:"rgb(238, 130, 238)"}} id="aoc2">  Discounted_price  :  {ele.discounted_price}</h3>
                    <del><h3 style={{color:"DodgerBlue"}} id="aoc3"> Actual_price  :  {ele.actual_price}</h3></del>
                    <div className="row">
                      <div className="d-flex justify-content-evenly">

                        
                      </div>
                    </div>

                </div>
              </div>
            </div>
                    <Button variant="danger" onClick={()=> checkcart(ele)} id="aoc">Add to cart</Button>
                    <Button  variant="success" onClick={()=>navigate ("/Buynow")}  id="aoc1">buy now</Button>

            </>
          );
        })}
      </div>
    );
  };
  
  export default ProductPage;