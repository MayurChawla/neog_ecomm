import "./productListStyle.css";
import Announcements from "../../Components/Announcements/Announcements";
import Navbar from "../../Components/Navbar/Navbar";
import Products from "../../Components/Products/Products";
import NewsLetter from "../../Components/Newsletter/NewsLetter";
import Footer from "../../Components/Footer/Footer";

const ProductList = () => {
    return(
        <div className="productList">
            <div className="container">
                <Navbar />
                <Announcements />
                <h1 className="title">
                    Dresses
                </h1>
                <div className="filterContainer">
                    <div className="filter">
                        <span className="filterText">
                            Filter Products :
                        </span>
                        <select>
                            <option disabled selected>Color</option>
                            <option>White</option>
                            <option>Black</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>Yellow</option>
                            <option>Green</option>
                        </select>
                        <select>
                            <option disabled selected>Size</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </div>
                    <div className="filter">
                        <span className="filterText">
                            Sort Products :
                        </span>
                        <select>
                            <option selected>Newest</option>
                            <option>Price (Asce)</option>
                            <option>Price (Desc)</option>
                        </select>
                    </div>
                </div>
                <Products />
                <NewsLetter />
                <Footer />
            </div>
        </div>
    )
}

export default ProductList;