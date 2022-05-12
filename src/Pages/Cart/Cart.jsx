import "./cartStyle.css";
import Announcements from "../../Components/Announcements/Announcements";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Add, Remove } from "@material-ui/icons";

const Cart = () => {
    return(
        <div className="cart">
            <div className="cart-container">
                <Navbar />
                <Announcements />
                <div className="cart-wrapper">
                    <h1 className="title">YOUR BAG</h1>
                    <div className="top">
                        <button className="top-button">CONTINUE SHOPPING</button>
                        <div className="texts">
                            <span className="text">Shopping Bag (2)</span>
                            <span className="text">Your Wishlist (0)</span>
                        </div>
                        <button className="top-button filled">CHECKOUT NOW</button>
                    </div>
                    <div className="bottom">
                        <div className="info">
                            <div className="product">
                                <div className="productDetail">
                                    <img alt="product-in-cart" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1w:1.00xh;center,top&resize=480%3A%2A"/>
                                    <div className="details">
                                        <span className="productName"><b>Product : </b> JESSIE THUNDER SHOES</span>
                                        <span className="productID"><b>ID : </b> 93813708293</span>
                                        <div className="productColor black"></div>
                                        <span className="productSize"><b>Size : </b> 37.5</span>
                                    </div>
                                </div>
                                <div className="priceDetail">
                                    <div className="productAmountContainer">
                                        <Add />
                                        <div className="productAmount">2</div>
                                        <Remove />
                                    </div>
                                    <div className="productPrice">
                                        $ 30
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="product">
                                <div className="productDetail">
                                    <img alt="product-in-cart" src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"/>
                                    <div className="details">
                                        <span className="productName"><b>Product : </b> HAKURA T-SHIRT</span>
                                        <span className="productID"><b>ID : </b> 93813708293</span>
                                        <div className="productColor gray"></div>
                                        <span className="productSize"><b>Size : </b> M</span>
                                    </div>
                                </div>
                                <div className="priceDetail">
                                    <div className="productAmountContainer">
                                        <Add />
                                        <div className="productAmount">2</div>
                                        <Remove />
                                    </div>
                                    <div className="productPrice">
                                        $ 20
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="summary">
                            <h1 className="summaryTitle">
                                ORDER SUMMARY
                            </h1>
                            <div className="summaryItem subTotal">
                                <span className="summaryItemText">
                                    SubTotal
                                </span>
                                <span className="summaryItemPrice">
                                    $ 80
                                </span>
                            </div>
                            <div className="summaryItem estimatedShipping">
                                <span className="summaryItemText">
                                    Estimated Shipping :
                                </span>
                                <span className="summaryItemPrice">
                                    $ 5.90
                                </span>
                            </div>
                            <div className="summaryItem shippingDiscount">
                                <span className="summaryItemText">
                                    Shipping Discount
                                </span>
                                <span className="summaryItemPrice">
                                    $ -5.90
                                </span>
                            </div>
                            <div className="summaryItem total">
                                <span className="summaryItemText">
                                    Total
                                </span>
                                <span className="summaryItemPrice">
                                    $ 80
                                </span>
                            </div>
                            <button className="checkout"> CHECKOUT NOW </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Cart;