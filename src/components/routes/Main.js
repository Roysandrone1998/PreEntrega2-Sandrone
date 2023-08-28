
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from '../Item/ItemListContainer';
import ItemDetailContainer from '../Item/ItemDetailContainer';

function Main() {
    return (
        <main>
            <div>
            <NavLink className="btn btn-primary" to="/cat/categoria1">Categoria1</NavLink>
            <NavLink className="btn btn-primary" to="/cat/categoria2">Categoria2</NavLink>
            <NavLink className="btn btn-primary" to="/cat/categoria3">Categoria3</NavLink>
            </div>

            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/carrito' element={<p>Carrito</p>} />
                <Route path='/cat/:id' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='*' element={<h1>ERROR 404 NOT FOUND</h1>} />
            </Routes>
        </main>
    );
}

export default Main;



