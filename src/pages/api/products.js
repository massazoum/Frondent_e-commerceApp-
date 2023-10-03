export default async function handler(req , res ){
 try{
  const response =await fetch('http://localhost:3001/api/products');
  const products = await response.json();
  res.status(200).json(products);
 }catch(error){
  console.error(error);
  {
res.status(500).json({error:'Internal server error'});
  }
 }
}