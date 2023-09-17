import { db } from "./Firebase";
import { addDoc, collection } from "firebase/firestore";
import data from "./seedData.json"


const productosCollection = collection(db, "productos")

data.forEach((producto)=>{

    addDoc(productosCollection, producto)
    .then((resultado)=>{
        console.log("resultadooo", resultado)
        return console.log("producto agregado")
    })
    .catch((error)=>{
        console.log("erorrrr", error)
        return console.log("mallll")
    })


})