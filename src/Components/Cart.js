// import axios from "axios"
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";


// function Cart() {
//     const [data,setData] = useState([]);
//     const [loading,setLoading] = useState(true);
//     const addToCart = (data) => {
//         axios.post('http://localhost:3000/cart',data)
//         .then((res)=>{
//             console.log(res)
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
//     }
// const updateQuentity = (data) => {
//     data.quentity += 1
//     axios.put(`http://localhost:3000/cart/${data.id}`,data)
//     .then((res)=>{
// console.log(res)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }

// const checkCart = (product) => {
//     let data = {
//         id:product.product_id,
//         name: product.product_name,
//         image:product.img_link,
//         actual_price: product.actual_price,
//       discounted_price: product.discounted_price,
//       discount_percentage: product.discount_percentage,
//         quentity:1
//     }
//     axios.get(`http://localhost:3000/cart/${product.product_id}`)
//     .then((res)=>{
//         updateQuentity(res.data)
//     })
//     .catch((err)=>{
//         console.log(err);
//         addToCart(data)
//     })

// };
// const remove = (product_id) => {
//     axios.delete(`http://localhost:3000/cart/${product_id}`)
//     .then((res)=>{
//         console.log("deleted",res);
//     })
// .catch((err)=>{
//     console.log(err);
// })

// };


// useEffect(()=>{
//     axios.get(`http://localhost:3000/product`)
//     .then((res)=>{
//         setData(res.data)
//     })
//     .catch(()=>{
//         setData([])
//     })
//     .finally(()=>{
//         setLoading(false)
//     })

// },[])

// return (
//     <div>
//         {loading && <p>Loading......</p>}
//         {
//             data.map((ele)=>{
//                 return <div>
//                     <p>{ele.product_id}</p>
//                     <Link to={`/ProductPage/${ele.product_id}`}>{ele.product_name}</Link>
//                     <button onClick={()=>checkCart(ele)}>Add to cart</button>
//                     <button onClick={()=>remove(ele.product_id)}>remove</button>
//                     </div>
//             })
//         }
//     </div>
// )

// }
// export default Cart