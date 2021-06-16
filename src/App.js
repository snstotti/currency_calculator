import './App.css';
import ListCurrency from './componets/ListCurrency';
import Menu from './componets/Menu/Menu';
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"
import CurrencyCalc from './componets/CurrencyCalc/CurrencyCalc';


export default function App () {
 
  return (

   

    <div className="container">
      <div className="mb-3">
        <Menu />
      </div>

      <Switch>
        <Route  path='/list_currency' component={ListCurrency} />
        <Route  path='/calculator' component={CurrencyCalc} />
        <Redirect from='/' to='/list_currency' />
      </Switch>

      {/* <ListCurrency /> */}

    </div>
  );
}
