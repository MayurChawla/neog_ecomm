import { ArrowLeftOutlined, ArrowRightOutlined, SignalWifiOffRounded } from "@material-ui/icons";
import "./sliderStyle.css"
import { useState } from "react";
import { sliderItems } from "../../backend/db/sliderItems";


function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        var set;
        switch (direction) {
            case "left":
                if(slideIndex > 0)
                {
                    set = slideIndex - 1;
                }
                else {
                    set = 2;
                }
                setSlideIndex(set);
                break;
            case "right":
                if(slideIndex < 2)
                {
                    set = slideIndex + 1;
                }
                else {
                    set = 0;
                }
                setSlideIndex(set);
                break;
        }
    }

    return (
        <div className="slider">
            <div className="container">
                <div className="arrow arrow-left" onClick={() => handleClick("left")}>
                    <ArrowLeftOutlined />
                </div>
                <div id="wrapper" className="wrapper" style={{transform: `translateX(${-100*slideIndex}vw)`}}>
                    {sliderItems.map((item) => {
                        return (<>
                            <div className="slide" style={{ "background-color": `${item.bg}` }} key={item.id}>
                                <div className="imagecontainer">
                                    <img alt={item.img} src={item.img} />
                                </div>
                                <div className="infocontainer">
                                    <h1 className="title">{item.title}</h1>
                                    <p className="description">{item.description}</p>
                                    <button className="button">SHOP NOW</button>
                                </div>
                            </div>
                        </>)
                    })}
                </div>
                <div className="arrow arrow-right" onClick={() => handleClick("right")}>
                    <ArrowRightOutlined />
                </div>
            </div>
        </div>
    )
}

export default Slider;