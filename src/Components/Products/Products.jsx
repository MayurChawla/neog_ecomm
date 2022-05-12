import "./productsStyle.css";
import { products } from "../../backend/db/products";
import Product from "../Product/Product";

const Products = () => {
    return (
        <div className="products">
            <div className="container">
                {
                    products.map(item=>(
                        <Product item={item} id={item.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products;