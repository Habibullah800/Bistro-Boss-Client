
const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex space-x-2 mb-2">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px]" src={image} alt="menuitem" />
            <div>
                <h3 className="uppercase">{name}-----------</h3>
                <h3>{recipe}</h3>
            </div>

            <p className="text-yellow-500">${price}</p>


        </div >
    );
};

export default MenuItem;