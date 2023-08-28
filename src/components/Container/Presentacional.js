import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

function Presentacional(props) {
    const limit = 10;
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
                                <ItemCount stock={10} inicial={1} onAdd={(cantidad) => console.log("Cantidad agregada:", cantidad)} />
                                </div>
                            </article>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Presentacional;
