import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home'
import Header from "./Components/Header/Header";
import {useParams, Route } from "react-router-dom";
import ContactUs from './Components/ContactUs/ContactUs';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import FilmProvider from './Store/FilmProvider'


function App() {
  const params=useParams()
  console.log('aaaa'+params.id)
  return (
    <div className="App">
     <Header></Header>
     <FilmProvider>
     <switch>
        <Route path='/home' exact><Home></Home></Route>
        <Route path='/home/:id'>
              <ProductDetail></ProductDetail>
        </Route>
        <Route path='/contactus'><ContactUs></ContactUs></Route>
        </switch>
        </FilmProvider>
    </div>
  );
}

export default App;
