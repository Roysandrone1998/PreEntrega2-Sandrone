import Button from 'react-bootstrap/Button';
import Item from './components/Item/Item';
function Main(){
    return(
        <main>
            <h2>Productos.</h2>
            <div>
            <Button as="input" type="button" value="Trucks" />{' '}
            <Button as="input" type="submit" value="Tablas" />{' '}
            <Button as="input" type="reset" value="Ruedas" />
            </div>
            <Item />
        </main>
        
        )
}

export default Main


