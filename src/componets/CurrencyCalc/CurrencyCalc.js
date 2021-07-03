import React from 'react'
import CurrencySelection from "../CurrencySelection/CurrencySelection"
import CurrencyEntryForm from '../CurrencyEntryForm/CurrencyEntryForm'
import { observer } from 'mobx-react'

export default observer(function CurrencyCalc(props) {
    const {baseCurrency,currencyConverted,setCurrencyConverted,
            setBaseCurrency,inputValue,setInputValue,currencyPrice}=props
    
    const calkValue = (inputValue * currencyPrice).toFixed(2)
        // console.log(baseCurrency,currencyConverted);
    return (
        <div className="d-flex justify-content-center" >
            <div className="mw-60 d-flex flex-column">
                <CurrencyEntryForm 
                    inputValue={inputValue}
                    setInputValue={setInputValue} />
                <div className="d-flex justify-content-around mb-4 h4">
                    <CurrencySelection setSelect={setBaseCurrency} newValue={baseCurrency} />
                    in
                    <CurrencySelection setSelect={setCurrencyConverted} newValue={currencyConverted} />
                </div>
                <div className="d-flex justify-content-center border-bottom border-3">
                    <span className="h3">{calkValue}</span>
                </div>
            </div>
        </div>
    )
})
