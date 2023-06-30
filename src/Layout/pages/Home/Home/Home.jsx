import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecomands from "../ChefRecomands/ChefRecomands";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <ChefRecomands></ChefRecomands>
            <Featured></Featured>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;