import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import FAQsection from "../FAQsection/FAQsection";
import Courses from "../Courses/Courses";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Alemeno-Academy | Home</title>
            </Helmet>
            <Banner></Banner>
            <Feature></Feature>
            <Courses></Courses>
            <FAQsection></FAQsection>
        </div>
    );
};

export default Home;