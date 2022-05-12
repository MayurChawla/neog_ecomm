import Announcements from "../../Components/Announcements/Announcements";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import Categories from "../../Components/Categories/Categories";
import Products from "../../Components/Products/Products";
import NewsLetter from "../../Components/Newsletter/NewsLetter";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
    return <>
        <Announcements />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <NewsLetter />
        <Footer />
    </>
}

export default Home;