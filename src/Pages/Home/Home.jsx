import Announcements from "../../Components/Announcements/Announcements";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import Brand from "../../Components/Brand/Brand";
import Products from "../../Components/Products/Products";
import NewsLetter from "../../Components/Newsletter/NewsLetter";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
    return <>
        <Announcements />
        <Navbar />
        <Slider />
        <Brand />
        <Products />
        <NewsLetter />
        <Footer />
    </>
}

export default Home;