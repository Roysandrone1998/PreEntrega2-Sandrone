import React from 'react';
import {Link} from 'react-router-dom';



function Item(props) {
    const limit = 20;
    return (
        <div className='presentacional'>
            {props.data.length === 0 ? (
                <p>"Cargando data"</p>
            ) : (
                <div className="card-container">
                    {props.data.slice(0, limit).map((item, i) => {
                        
                        return (
                            <article className="card" key={i}>
                                <div><h2>{item.title} - ${item.price}</h2>
                                <img src={item.image} alt={item.title} />
                                </div>
                                <div>
                                
                                </div>
                                <Link className="btn btn-secondary" to={`/item/${item.id}`}>Detalles</Link>
                            </article>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Item;
