import '../styles/App.css';
import Header from './Header';
import { Route } from "react-router-dom";
import Home from "./Home";
import Sales from './Sales';
import Footer from './Footer';


function App() {
  return (
    <div>
      <Header />
      <br/>
      <Route exact path="/">
          <Home />
      </Route>
      <Route exact path="/sales">
          <Sales />
      </Route>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
