import { collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBzGHNaU-FrQSbwee0kSg_2HH2dlhQwgWo",
    authDomain: "skateshop-cc395.firebaseapp.com",
    projectId: "skateshop-cc395",
    storageBucket: "skateshop-cc395.appspot.com",
    messagingSenderId: "61430704856",
    appId: "1:61430704856:web:3cf81537a228cf84b4c5ad"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


export  const createItem = async(obj) => {
    const colRef = collection(db, 'orders');
    const data = await addDoc(colRef, obj);
    return data.id;
};