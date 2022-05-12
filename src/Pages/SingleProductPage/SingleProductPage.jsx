import "./singleProductPageStyle.css";
import Announcements from "../../Components/Announcements/Announcements";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import NewsLetter from "../../Components/Newsletter/NewsLetter";
import { Add, Remove } from "@material-ui/icons";

const SingleProductPage = () => {
    return(
        <div className="SingleProductPage">
            <div className="container">
                <Navbar />
                <Announcements />
                <div className="SingleProductPage-wrapper">
                    <div className="imagecontainer">
                        <img alt="jeans" src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
                    </div>
                    <div className="infocontainer">
                        <h1 className="title">Denim JumpSuit</h1>
                        <p className="description">
                            This is a With my introduction in first paragraph lets extend the text further. This is the second para of dummy text. It can help developers to know what text is included. Since this text is in simple english it is easy and soothing to eyes and mind for people who work with english language on a daily basis.
                        </p>
                        <span className="price">$ 20</span>
                        <div className="filtercontainer">
                            <div className="filter">
                                <span className="filter-title">
                                    Color
                                </span>
                                <div className="filtercolor Black">
                                </div>
                                <div className="filtercolor DarkBlue">
                                </div>
                                <div className="filtercolor Gray">
                                </div>
                            </div>
                            <div className="filter">
                                <span className="filter-title">
                                    Size
                                </span>
                                <select className="size">
                                    <option className="sizeoption">XS</option>
                                    <option className="sizeoption">S</option>
                                    <option className="sizeoption">M</option>
                                    <option className="sizeoption">L</option>
                                    <option className="sizeoption">XL</option>
                                </select>
                            </div>
                        </div>
                        <div className="addcontainer">
                            <div className="amountcontainer">
                                <Remove />
                                <span className="amount">1</span>
                                <Add />
                            </div>
                            <button className="addToCart">ADD TO CART</button>
                        </div>
                    </div>

                </div>
                <NewsLetter />
                <Footer />
            </div>
        </div>
    )
}

export default SingleProductPage;