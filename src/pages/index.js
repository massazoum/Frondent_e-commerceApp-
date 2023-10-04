import React,{useState} from "react";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// import groceryProducts from "@/data/products";
function Home(){
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('http://localhost:3001/api/groceryProducts');
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

  const [searchTerm, setSearchTerm] = useState("");

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

 // Function to filter products based on the search term
 const filteredProducts = products.filter((product) =>
 product.name.toLowerCase().includes(searchTerm.toLowerCase())
);

 return(

  <div className="mainDiv">
    <Header/>
   <h1 className="Title">Grocery Proucts</h1>
   <div className="container_product_list">
   <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
       </div>
      <div className="container_product_list"> 
  <div className="product_list"> 
{
 filteredProducts.map((product)=>(
  <div key={product.id} className="product-card"> 
  <div className="Container_img">
  <img src={product.image} alt=""></img>
  </div>
   <h2>{product.name}</h2>
   <p>{product.description}</p>

   <button onClick={() => openModal(product)}>View Details</button>
   <button onClick={() => addToCart(product)}>Add to Cart</button>
   </div>
 ))}
 </div>
  </div>

  
{showModal && (
 <div className="modal">
   <div className="modal-content">
   <div className="Container_img">
  <img src={selectedProduct.image} alt=""></img>
  </div>
     <h2>{selectedProduct.name}</h2>
     <p>${selectedProduct.price}</p>
     <p>{selectedProduct.description}</p>
     <button onClick={closeModal}>Close</button>
   </div>
 </div>
)}

<Footer/>
</div>
);
}


export default Home;