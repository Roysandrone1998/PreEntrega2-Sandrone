import Button from 'react-bootstrap/Button';
function Main(){
    return(
        <main>
            <h2>Productos.</h2>
            <div>
            <Button as="input" type="button" value="Trucks" />{' '}
            <Button as="input" type="submit" value="Tablas" />{' '}
            <Button as="input" type="reset" value="Ruedas" />
            </div>
        </main>
        )
}

export default Main


