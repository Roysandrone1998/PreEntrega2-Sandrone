import {BrowserRouter} from "react-router-dom"
import Header  from "./components/routes/Header";
import Main from "./components/routes/Main";
import Footer from "./components/routes/Footer";
import "./components/db/Firebase"
import CartProvider from "./components/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Main />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
