import './App.css';
import { BrowserRouter , Switch , Route} from 'react-router-dom';
import Home from './componants/Home/Home';
import Foods from './componants/Foods/Foods';
import About from './componants/About/About';
import Contact from './componants/Contact/Contact';
import Login from './componants/Login/Login';
import Register from './componants/Register/Register';
import NotFound from './componants/NotFound/NotFound';
import Header from './componants/Header/Header';
import Footer from './componants/Footer/Footer';


function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/home" exact>
            <Home></Home>
          </Route>
          <Route path="/foods">
            <Foods></Foods>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
