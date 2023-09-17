import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
    const [quantity, SetQuantity] = useState(0);

    const increment = () => {
        if (quantity < stock) {
        SetQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
        SetQuantity(quantity - 1);
        }
    };

    return (
        <div className="text-center mt-2">
        <div className="flex justify-center">
            <button
            className="inline-block rounded-full border border-[#E5E7EB] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
            onClick={decrement}
            >
            -
            </button>
            <h4 className="py-2 px-4">{quantity}</h4>
            <button
            className="inline-block rounded-full border border-[#E5E7EB] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
            onClick={increment}
            >
            +
            </button>
        </div>
        <div className="mt-2">
            <button
            className="inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
            onClick={() => onAdd(quantity)}
            disabled={!stock}
            >
            Add to cart
            </button>
        </div>
    </div>
    );
};

export default ItemCount;