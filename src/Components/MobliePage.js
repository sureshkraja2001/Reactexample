import React, { useEffect, useState } from "react"
import  './Cards.css'
import  './MobliePage.css'
// import Button from '@mui/material/Button';
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom"
import ListGroup from 'react-bootstrap/ListGroup';
import Navbars from "./Navbars";


const MobliePage = () => {
  const [data, setdata] = useState([]);

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
      quentity:1
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

  const { product_id } = useParams();
  const Api = `http://localhost:3000/product?product=${product_id}`;

  useEffect(() => {
    axios.get(`${Api}`).then((r) => {
      console.log(r.data);
      setdata(r.data);
    });
  }, []);
  const navigate = useNavigate();

  return (
    <>
            <Navbars/>

      <div className=" sks">
        {data.map((e) => {
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
                    <Button variant="danger" onClick={()=> checkcart(e)}>Add to cart</Button>
                    <Button variant="success" onClick={()=> navigate("/Buynow")}>Buy Now</Button>
                  </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MobliePage