import ItemListContainer from './ItemListContainer';
import NavBar from './components/NavBar';
function Header(){
    return(
    <header className="bg-primary" id="happyskate">
        
        <NavBar />
        <ItemListContainer  greeting={"¡Bienvenidos!"}/>
        
    </header>
        )
}

export default Header