import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import img1 from '../../../../assets/home/slide1.jpg'
import img2 from '../../../../assets/home/slide2.jpg'
import img3 from '../../../../assets/home/slide3.jpg'

const ChefRecomands = () => {
    return (
        <div className="w-[80%] mx-auto my-24 mb-28">
            <SectionTitle
                subHeading={'---Should Try---'}
                heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

                <div className="card  bg-base-100">
                    <figure><img className="h-[280px] w-[320px] rounded-t-xl " src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Caeser Salad</h2>
                        <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline text-yellow-600 border-0 border-b-4 mt-3">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 ">
                    <figure><img className="h-[280px] w-[320px] rounded-t-xl " src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Barbine Pasta</h2>
                        <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline text-yellow-600 border-0 border-b-4 mt-3">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 ">
                    <figure><img className="h-[280px] w-[320px] rounded-t-xl " src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Fedelini Soup</h2>
                        <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline text-yellow-600 border-0 border-b-4 mt-3">Add to Cart</button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default ChefRecomands;