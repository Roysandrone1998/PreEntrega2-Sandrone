import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
function Main(){
    return(
        <main>
            <div>
            
            <NavLink className="btn btn-primary" to="/cat">Categorias</NavLink>
            <NavLink className="btn btn-primary" to="/cat">Categorias</NavLink>
            <NavLink className="btn btn-primary" to="/cat">Categorias</NavLink>
        
            </div>
            
            <Routes>
                <Route path='/' element={<Container/>}/>
                <Route path='/carrito' element={<p>Carrito</p>}/>
                <Route path='/cat' element={<Container/>}/>
            </Routes>
        </main>
        
        )
}

export default Main


