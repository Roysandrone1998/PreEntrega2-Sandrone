import ItemCount from "./ItemCount";
import {  useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";



const ItemDetail = ({ id, name, price, image, description, category, stock }) => {
    const [data, setData] = useState(false);
    const { addItem } = useCartContext();
    const onAdd = (quantity) => {
        setData(true);
        addItem({ id, quantity});
    };
    return (
        <section className="card">
        <div >
            <img src={image} alt="" className="" />
            <div >
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
            <div className='finish'>
            {
                data 
                ? <Link className='finish-link' to='/Cart'>Terminar Compra</Link>
                : <ItemCount initial={1}  stock={stock} onAdd={onAdd}/>
            }
            </div>
</div>
            </div>
        </div>
        </section>
    );
};

export default ItemDetail;