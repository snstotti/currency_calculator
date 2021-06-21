import React from 'react';
import './App.css';
import ListCurrency from './componets/ListCurrency/ListCurrency';
import Menu from './componets/Menu/Menu';
import {Route,Switch,Redirect} from "react-router-dom"
import CurrencyCalc from './componets/CurrencyCalc/CurrencyCalc';
import store from './store/store';
import { Provider } from 'mobx-react';


const MyStore = {
  
  listCurrency: store.listCurrency,
  setListPairs: store.setListPairs
  
}


export default function App () {


  
  return (
    <Provider value={MyStore}>
      <div className="container">

        <div className="mb-3">
          <Menu />
        </div>

        <Switch>
          <Route path='/list_currency' render={() => <ListCurrency/>} />
          <Route path='/calculator' component={CurrencyCalc} />
          <Redirect from='/' to='/list_currency' />
        </Switch>
      </div>
    </Provider>
    
  );
}
