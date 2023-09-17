import React from "react";
import ItemCount from "./ItemCount"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
const ItemDetail = ({ description, price, image, category, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);
    const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = { category, price, image };
    addItem(item, quantity);
    };
    return (
        <article className="card">
            <div>
                <h2>{description} - ${price}</h2>
                <img src={image} alt={description} className=""/>
            </div>
            <div>
                <h4>Categoría: {category}</h4>
                <p>Precio: ${price}</p>
                <p>Stock: {stock}</p>
            </div>
            <div>
                {quantityAdded > 0 ? (
                <div className="mt-5">
                    <Link to="/">
                    <svg
                        className="inline mr-2 text-black w-4"
                        viewBox="0 0 448 512"
                    >
                        <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                    </svg>
                    Continue Shopping
                    </Link>
                    <Link to="/cart">
                    <button className="inline-block ml-4 mt-4 rounded-full border border-[#E5E7EB] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white">
                        Go to Cart
                    </button>
                    </Link>
                </div>
                ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )}
            </div>
            
        </article>
    );
}

export default ItemDetail;