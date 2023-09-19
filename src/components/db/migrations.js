import { db } from "./Firebase";
import { addDoc, collection } from "firebase/firestore";
import data from "./seedData.json"


const productosCollection = collection(db, "productos")

data.forEach((productos)=>{

    addDoc(productosCollection, productos)
    .then((resultado)=>{
        console.log("resultadooo", resultado)
        return console.log("producto agregadoss")
    })
    .catch((error)=>{
        console.log("erorrrr", error)
        return console.log("mallll")
    })


})