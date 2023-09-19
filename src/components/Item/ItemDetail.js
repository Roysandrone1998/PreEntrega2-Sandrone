import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const ItemDetail = ({id, name, image, category, description, price, stock, data}) => {
    const [goToCart, setGoToCart] = useState(false);

    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {
        setGoToCart(true)
        

        const item = { id, name, price, image };

        addItem(item, quantity);
    };

    return (
        <section className="card">
        <div >
            <img src={image} alt="" className="" />
            <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3 className="">{name}</h3>
            <div className="flex justify-center">
                <p className="">Price: {price}$</p>
                <p className="leading-relaxed mr-5 mb-2 text-body-color">Stock: {stock}</p>
                <p className="">Category: {category}</p>
            </div>
            <div className="flex justify-center">
                <p className="">{description}</p>
            </div>
            <div className="mt-5">
            {goToCart 
                ? <Link to="/cart">Terminar Compra</Link>
                : <>
                    <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                    <Link to="/">Continue Shopping</Link>
                </>
    }
</div>
            </div>
        </div>
        </section>
    );
};

export default ItemDetail;