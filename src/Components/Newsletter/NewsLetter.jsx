import { Send } from "@material-ui/icons";
import "./newsLetterStyle.css";

const NewsLetter = () =>{
    return(
    <div className="newsletter">
        <div className="container">
            <h1 className="title">NewsLetter</h1>
            <div className="description">
                Get Timely updates for your favourite products..
            </div>
            <div className="inputContainer">
                <input placeholder="Enter your email to subscribe.." className="email"/>
                <button className="subscribe">
                    <Send/>
                </button>
            </div>
        </div>
    </div>
    )
}

export default NewsLetter;