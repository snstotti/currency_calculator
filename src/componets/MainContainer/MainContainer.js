import { inject, observer } from 'mobx-react'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import CurrencyCalc from '../CurrencyCalc/CurrencyCalc'
import ListCurrency from '../ListCurrency/ListCurrency'
import Menu from '../Menu/Menu'




export default inject('value')(observer(function MainContainer({value}) {
    const {listCurrency,currentCurrency,setListCurrency,setListPrice,currencyPrice,getPrice}=value

    const [select,setSelect] = React.useState(currentCurrency)
    const [currency,setCurrency] = React.useState('RUB')
    // const [price,setPrice] = React.useState(currencyPrice)

    
   
    React.useEffect(() => {
        setListCurrency(currentCurrency)
        setListPrice(select)
        getPrice(currency)
        
    }, [select,listCurrency,currentCurrency,currency,currencyPrice.price])
    // console.log(currency);
    

    console.log(currency ,currencyPrice.price);
    
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
                        newValue={currency}
                        setSelect={setCurrency}
                    />} />
                    <Redirect from='/' to='/list_currency' />
                </Switch>
            </div>
       
    )
}))
