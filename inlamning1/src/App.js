import './App.css';
import { BrowserRouter, Switch, Route } from'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './views/Home';
import Products from './views/Products'
import About from './views/About';
import ProductInfo from './views/ProductInfo'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/About" component={About} />
          <Route exact path="/products/:id" component={ProductInfo}/>
        </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
