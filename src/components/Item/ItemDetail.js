import React from "react";

const ItemDetail = ({ title, price, image, category }) => {
    return (
        <article className="card">
            <div>
                <h2>{title} - ${price}</h2>
                <img src={image} alt={title} />
            </div>
            <div>
                <h4>Categoría: {category}</h4>
                <p>Precio: ${price}</p>
            </div>
        </article>
    );
}

export default ItemDetail;