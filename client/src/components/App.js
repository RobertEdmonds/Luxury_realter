import '../styles/App.css';
import Header from './Header';
import { Route } from "react-router-dom";
import Home from "./Home";
import Sales from './Sales';
import Footer from './Footer';
import SignUpForm from './SignUpForm';


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
      <Route exact path="/signup">
          <SignUpForm />
      </Route>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
