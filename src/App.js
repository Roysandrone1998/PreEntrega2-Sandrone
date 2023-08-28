import {BrowserRouter} from "react-router-dom"
import Header  from "./components/routes/Header";
import Main from "./components/routes/Main";
import Footer from "./components/routes/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
