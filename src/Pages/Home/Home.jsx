import Banner from "./Banner";
import FashionQuiz from "./FashionQuiz";
import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";
import RecentTrends from "./RecentTrends";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <FashionQuiz></FashionQuiz>
            <RecentTrends></RecentTrends>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;