import Pages from "./pages/Pages";
import Nav from "./components/nav";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";

//1:28 hr
function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
