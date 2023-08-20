import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { AiFillMinusSquare } from "react-icons/ai";
import Navbars from "./Navbars";
// import  "./Addtocart.css";

// import "../ecomerceProject/cart.css";
// import Navbars from "./navbar/Navbars";

const Addtocart = () => {
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
  // const checkcart = (product) => {
  //   axios
  //     .get(`http://localhost:3000/cart/${product.product_id}`)
  //     .then((res) => {
  //       updateqnty(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       addToCart(data);
  //     });
  // };
  const checkCart = (product) => {
    let data = {
      id: product.product_id,
      name: product.product_name,
      image: product.img_link,
      actual_price: product.actual_price,
      discounted_price: product.discounted_price,
      discount_percentage: product.discount_percentage,
      quantity: 1
    }
    axios.get(`http://localhost:3000/cart/${product.product_id}`)
      .then((res) => {
        updateqnty(res.data)
      })
      .catch((err) => {
        console.log(err);
        addToCart(data)
      })

  };
  const remove = (id) => {
    axios
      .delete(`http://localhost:3000/cart/${id}`)
      .then((res) => {
        console.log("deleted", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/cart`).then((res) => {
      setdata(res.data);
    });
  }, []);
  return (
    <>
      <Navbars />
      <div style={{ marginTop: "100px" }}>
        <div className="row mt-4">
          <div className="col-md-3 ">
            <h6 style={{ color: "orange" }}>Product</h6>
          </div>
          <div className="col-md-3">
            <h6 style={{ color: "MediumSeaGreen" }}>Product Name</h6>
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-4">
                <h6 style={{ color: "DodgerBlue" }}>Actual Price</h6>
              </div>
              <div className="col-md-4">
                <h6 style={{ color: "Violet" }}>Discounted price</h6>
              </div>
              {/* <div className="col-md-4">
                <h6>Discount percentage</h6>
              </div> */}
            </div>
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-3 ">
                <h6 style={{ color: "SlateBlue" }}>Quantity</h6>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <h6 style={{ color: "Orange" }}>Remove</h6>
              </div>
            </div>
          </div>
        </div>
        {data.map((e) => {
          let sp = e.discounted_price.slice(1);
          let num = Number(sp.split(",").join(""));
          let sum = num * e.quantity;
          return (
            <>
              <div className="containercart ">
                {/* doooo */}
                <hr></hr>
                <div className="row mt-4">
                  <div className="col-md-3">
                    <img src={e.image} height={120} />
                  </div>
                  <div className="col-md-3" style={{ color: "MediumSeaGreen" }}>
                    <small>{e.name}</small>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-4">
                        <h5>
                          <del style={{ color: "DodgerBlue" }}>{e.actual_price}</del>
                        </h5>
                      </div>
                      <div className="col-md-4">
                        <h5 style={{ color: "Violet" }}>
                          {/* <b style={{ color: "green" }}>{e.discounted_price}</b> */}
                          {`₹${sum}`}

                        </h5>
                      </div>
                      <div className="col-md-4">
                        <h5>
                          {/* <b style={{ color: "yellowgreen" }}>
                            {e.discount_percentage}
                          </b> */}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-3">
                        <BsFillPlusSquareFill style={{ color: "SlateBlue" }}
                          onClick={() => updateqnty(e)}
                          className="logobtn"
                        />
                      </div>
                      <div className="col-md-3 ">
                        <b style={{ color: "green" }}>{e.quantity}</b>
                      </div>
                      <div className="col-md-3">
                        <AiFillMinusSquare style={{ color: "SlateBlue" }}
                          onClick={() => decressqnty(e)}
                          className="logobtn"
                        />
                      </div>
                      <div className="col-md-3">
                        <BsFillTrash3Fill style={{ color: "orange" }}
                          onClick={() => remove(e.id)}
                          className="remove"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Addtocart;
