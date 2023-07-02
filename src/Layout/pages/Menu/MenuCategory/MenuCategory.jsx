import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, menuImg, title }) => {
    return (
        <div>
            <div className="mb-24">
                {title && <Cover img={menuImg} title={title}></Cover>}

                <div className="grid md:grid-cols-2 gap-10 w-[80%] mx-auto mt-12 ">
                    {
                        items.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <button className="btn btn-outline text-White border-0 border-b-4 mx-auto  flex justify-center mt-4  mb-16 ">Order your Favourite Food</button>
            </div>


        </div>
    );
};

export default MenuCategory;