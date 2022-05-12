import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import "./productStyle.css";

const Product = ({item}) => {
    return (
        <div className="product">
            <div className="container">
                <div className="circle"></div>
                <img className="image" src={item.img}></img>
                <div className="info">
                    <div className="icon">
                        <ShoppingCartOutlined/>
                    </div>
                    <div className="icon">
                        <SearchOutlined/>
                    </div>
                    <div className="icon">
                        <FavoriteBorderOutlined/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;