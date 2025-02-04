import MediaCard from "./Card";

const Product = (props)=> {
    return  (
      
        props.products.map((product,index)=>{
        return <MediaCard key={index} name={product.name} price={product.price} />
      }) 
      
      )
}

export default Product;