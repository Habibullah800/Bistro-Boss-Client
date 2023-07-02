// import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../../hooks/UseMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section>

            <SectionTitle
                heading={'FROM OUR MENU'}
                subHeading={'Check it out'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 w-[80%] mx-auto my-12 mb-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline text-White border-0 border-b-4 mx-auto  flex justify-center  mb-16 ">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;