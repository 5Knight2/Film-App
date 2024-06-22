import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home'
import Header from "./Components/Header/Header";
import {useParams, Route } from "react-router-dom";
import ContactUs from './Components/ContactUs/ContactUs';


function App() {
  const params=useParams()
  console.log('aaaa'+params.id)
  return (
    <div className="App">
     <Header></Header>
        <Route path='/home' exact><Home></Home></Route>
        <Route path='/home/:id'>
                <p>hello{params.id}</p>
        </Route>
        <Route path='/contactus'><ContactUs></ContactUs></Route>
      
    </div>
  );
}

export default App;
