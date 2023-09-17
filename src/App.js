import {BrowserRouter} from "react-router-dom"
import Header  from "./components/routes/Header";
import Main from "./components/routes/Main";
import Footer from "./components/routes/Footer";
import MiCustomProvider from "./components/MiCustomProvider";


function App() {
  return (
    <BrowserRouter>
      <MiCustomProvider>
        <Header />
        <Main />
        <Footer />
      </MiCustomProvider>
    </BrowserRouter>
  );
}

export default App;
