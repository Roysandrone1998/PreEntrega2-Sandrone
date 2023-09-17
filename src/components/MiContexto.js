import { createContext } from "react";



const contexto = createContext ()
const Provider  = contexto.Provider

const MiCustomProvider = (props) => {
    const valorDelContexto = {
        cantidadTotal : 20,
    }
    return(
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}

export default MiCustomProvider