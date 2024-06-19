import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home'
import Header from "./Components/Header/Header";
import { Route } from "react-router-dom";
import ContactUs from './Components/ContactUs/ContactUs';


function App() {
  return (
    <div className="App">
     <Header></Header>
        <Route path='/home'><Home></Home></Route>
            <Route path='/contactus'><ContactUs></ContactUs></Route>
      
    </div>
  );
}

export default App;
