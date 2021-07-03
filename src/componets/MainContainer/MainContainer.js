import { inject, observer } from 'mobx-react'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import CurrencyCalc from '../CurrencyCalc/CurrencyCalc'
import ListCurrency from '../ListCurrency/ListCurrency'
import Menu from '../Menu/Menu'

export default inject('value')(observer(function MainContainer({value}) {

    const {listCurrency,currentCurrency,setListCurrency,setListPrice,currencyPrice,getPrice}=value

    const [select,setSelect] = React.useState(currentCurrency) // значение селекта таблицы
    const [currencyConverted,setCurrencyConverted] = React.useState('RUB') // конвертируемая валюта
    const [baseCurrency,setBaseCurrency] = React.useState('USD') // базовая валюта
    const [inputValue,setInputValue] = React.useState(1) // значение формы по умолчанию (1 долар)

    
   
    React.useEffect(() => {
        setListCurrency(select)
        setListPrice(select)
        getPrice(currencyConverted,baseCurrency)
    }, [select,currentCurrency,currencyConverted,baseCurrency,currencyPrice.price])
   
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
                        currencyPrice={currencyPrice.price}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        currencyConverted={currencyConverted}
                        setCurrencyConverted={setCurrencyConverted}
                        baseCurrency={baseCurrency}
                        setBaseCurrency={setBaseCurrency}
                    />} />
                    <Redirect from='/' to='/list_currency' />
                </Switch>
            </div>
       
    )
}))
