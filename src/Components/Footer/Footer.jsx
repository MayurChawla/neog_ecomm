import { Facebook, Instagram, MailOutline, Payment, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import "./footerStyle.css";

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="left">
                    <h1 className="logo">
                        Y-LUX
                    </h1>
                    <div className="description">
                        Description for Y-LUX.<br></br> This is a With my introduction in first paragraph lets extend the text further. This is the second para of dummy text. It can help developers to know what text is included. Since this text is in simple english it is easy and soothing to eyes and mind for people who work with english language on a daily basis.
                    </div>
                    <div className="socialIconContainer">
                        <div className="socialIcon facebook">
                            <Facebook />
                        </div>
                        <div className="socialIcon instagram">
                            <Instagram />
                        </div>
                        <div className="socialIcon twitter">
                            <Twitter />
                        </div>
                        <div className="socialIcon pinterest">
                            <Pinterest />
                        </div>
                    </div>
                </div>
                <div className="center">
                    <h1 className="title logo">
                        Useful Links : 
                    </h1>
                    <ul>
                        <li>Home</li>
                        <li>Cart</li>
                        <li>Men's Fashion</li>
                        <li>Women's Fashion</li>
                        <li>Accessories</li>
                        <li>My Account</li>
                        <li>Order Tracking</li>
                        <li>Wishlist</li>
                        <li>Terms</li>
                    </ul>
                </div>
                <div className="right">
                    <h1 className="title logo">
                        Contact :
                    </h1>
                    <div className="contact">
                        <div className="contactItem">
                            <Room/> 226/b, Sindhi colony, Sardarnagar, Ahmedabad - 382475
                        </div>
                        <div className="contactItem">
                            <Phone /> +91 9409064959
                        </div>
                        <div className="contactItem">
                            <MailOutline /> Contact@ylux.com
                        </div>
                        <div className="payments">
                            <img src="https://i.ibb.co/Qfvn4z6/Payment.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;