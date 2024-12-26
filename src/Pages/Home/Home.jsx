import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";
import RecentTrends from "./RecentTrends";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <RecentTrends></RecentTrends>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;