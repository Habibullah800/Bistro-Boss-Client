import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import featuredItem from "../../../../assets/home/featured.jpg"
import "./Featured.css"

const Featured = () => {
    return (
        <div className="featured-item bg-fixed">
            <div className=" bg-[#151515] bg-opacity-40   py-1 my-16 text-white">
                <SectionTitle
                    heading="Featured Item"
                    subHeading="Cheak it out"
                ></SectionTitle>
                <div className="md:flex justify-center   items-center pb-20 pt-12 px-36">
                    <div>
                        <img className="rounded" src={featuredItem} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p className="mb-2">March 20, 2023</p>
                        <p className="uppercase mb-1">WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline text-white border-0 border-b-4 mt-3">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;