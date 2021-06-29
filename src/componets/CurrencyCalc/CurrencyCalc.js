import React from 'react'
import CurrencySelection from "../CurrencySelection/CurrencySelection"
import CurrencyEntryForm from '../CurrencyEntryForm/CurrencyEntryForm'

export default function CurrencyCalc({currencyPrice,getPrice,newValue,currency,setSelect}) {

    

    return (
        <div className="d-flex justify-content-center" >
            <div className="mw-60 d-flex flex-column">
                <CurrencyEntryForm />
                <div className="d-flex justify-content-around mb-4 h4">
                    <CurrencySelection setSelect={setSelect} newValue={newValue} />
                    in
                    <CurrencySelection setSelect={setSelect} newValue={newValue} />
                </div>
                <div className="d-flex justify-content-center border-bottom border-3">
                    <span className="h3">50000 RUB</span>
                </div>
            </div>

        </div>
    )
}
