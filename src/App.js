import './App.css';
import ListCurrency from './componets/ListCurrency/ListCurrency';
import Menu from './componets/Menu/Menu';
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom"
import CurrencyCalc from './componets/CurrencyCalc/CurrencyCalc';
import store from './store/store';


export default function App () {

 let currentCurrency = store.currentCurrency
 
  return (
    <div className="container">
      <div className="mb-3">
        <Menu />
      </div>

      <Switch>
        <Route  path='/list_currency' render={()=><ListCurrency currentCurrency={currentCurrency} />} />
        <Route  path='/calculator' component={CurrencyCalc} />
        <Redirect from='/' to='/list_currency' />
      </Switch>

      {/* <ListCurrency /> */}

    </div>
  );
}
