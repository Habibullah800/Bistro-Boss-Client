import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from "../../../../assets/menu/banner3.jpg"
import DessertBG from "../../../../assets/menu/dessert-bg.jpeg"
import pizzaBG from "../../../../assets/menu/pizza-bg.jpg"
import saladBG from "../../../../assets/menu/salad-bg.jpg"
import soupBG from "../../../../assets/menu/soup-bg.jpg"
import useMenu from '../../../../hooks/UseMenu';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {

    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            {/* Main Cover */}
            <Cover img={menuImg} title="our menu"></Cover>

            {/* Offered Cover */}
            <SectionTitle
                subHeading={"Don't miss"}
                heading={"Today's Offer"}
            ></SectionTitle>
            <MenuCategory
                items={offered}
            ></MenuCategory>

            {/* Dessert */}

            <MenuCategory
                items={dessert}
                title="dessert"
                menuImg={DessertBG}
            ></MenuCategory>

            {/* Pizza */}

            <MenuCategory
                items={pizza}
                title="pizza"
                menuImg={pizzaBG}
            ></MenuCategory>

            {/* Sadad */}

            <MenuCategory
                items={salad}
                title="salad"
                menuImg={saladBG}
            ></MenuCategory>

            {/* Soup */}

            <MenuCategory
                items={soup}
                title="soup"
                menuImg={soupBG}
            ></MenuCategory>


        </div>
    );
};

export default Menu;