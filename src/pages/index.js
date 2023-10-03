import React,{useState} from "react";
import { useEffect } from "react";

// import groceryProducts from "@/data/products";

function Home(){
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('http://localhost:3001/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError('Error fetching products. Please try again later.');
      }
    }

    fetchProducts();
  }, []);

 const addToCart = (product)=> {
  const existingCart = JSON.parse(localStorage.getItem("cart"))||[];

  existingCart.push(product);

  localStorage.setItem("cart", JSON.stringify(existingCart));
 }



 const [showModal , setShowModal]=useState(false);
 const [selectedProduct , setSelectedProduct] = useState(null);

 const openModal = (product)=>{
  setSelectedProduct(product);
  setShowModal(true);
 }

 const closeModal =()=> {
  setSelectedProduct(null);
  setShowModal(false);
 }
 return(
  <div>
   <h1>Grocery Proucts</h1>
  <div className="product_list"> 
{
 products.map((product)=>(
  <div key={product.id} className="product-card"> 
   <h2>{product.name}</h2>
   <p>{product.description}</p>
   <button onClick={() => openModal(product)}>View Details</button>
   <button onClick={() => addToCart(product)}>Add to Cart</button>
   </div>
 ))}

  </div>

  
{showModal && (
 <div className="modal">
   <div className="modal-content">
     <h2>{selectedProduct.name}</h2>
     <p>${selectedProduct.price}</p>
     <p>{selectedProduct.description}</p>
     <button onClick={closeModal}>Close</button>
   </div>
 </div>
)}
</div>

);
}


export default Home;