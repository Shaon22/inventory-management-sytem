import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import NewsLetter from "../Newsletter/NewsLetter";
import UserStats from "../UserStatistics/UserStats";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AboutUs></AboutUs>
           <UserStats></UserStats>
           <NewsLetter></NewsLetter>
           <Footer></Footer>
        </div>
    );
};

export default Home;