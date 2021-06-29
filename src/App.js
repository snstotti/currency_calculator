import React from 'react';
import './App.css';
import store from './store/store';
import { Provider } from 'mobx-react';
import MainContainer from './componets/MainContainer/MainContainer';
import { observer } from 'mobx-react-lite';


const MyStore = {
  setListCurrency:store.setListCurrency,
  listSelectCurrency:store.listSelectCurrency,
  setListPrice: store.setListPrice,
  listCurrency: store.listCurrency,
  currentCurrency: store.currentCurrency,
  handleCurrentCurrency: store.handleCurrentCurrency,
  getPrice: store.getPrice,
  currencyPrice: store.currencyPrice,
  currency: store.currency,
}


export default observer(function App () {
  
  return (
    <Provider value={MyStore}>
      <MainContainer/> 
    </Provider>
  );
})
