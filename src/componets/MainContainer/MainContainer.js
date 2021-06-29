import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import CurrencyCalc from '../CurrencyCalc/CurrencyCalc'
import ListCurrency from '../ListCurrency/ListCurrency'
import Menu from '../Menu/Menu'



export default inject('value')(observer(function MainContainer({value}) {
    const {listCurrency,currentCurrency,setListCurrency,setListPrice,currencyPrice,getPrice,currency}=value

    const [select,setSelect] = React.useState(currentCurrency)
    const [currencyCalc,setCurrencyCalc] = React.useState(currency)
    const [price,setPrice] = React.useState(0)

    
   
    React.useEffect(() => {
        setListCurrency(currentCurrency)
        setListPrice(select)
        setPrice(getPrice(currencyCalc))
    }, [select,listCurrency,currentCurrency,currency])

    // console.log(getPrice('AUD'));
    console.log(currencyCalc, currencyPrice);
    
    return (
       
            <div className="container">
                <div className="mb-3">
                    <Menu />
                </div>
                <Switch>
                    <Route path='/list_currency' render={() => <ListCurrency 
                        setSelect={setSelect} 
                        newValue={select} 
                        listCurrency={listCurrency}/>} 
                    />
                    <Route path='/calculator' render={()=><CurrencyCalc 
                        currencyPrice={currencyPrice}
                        getPrice={getPrice}
                        newValue={currencyCalc}
                        setSelect={setCurrencyCalc}
                    />} />
                    <Redirect from='/' to='/list_currency' />
                </Switch>
            </div>
       
    )
}))
