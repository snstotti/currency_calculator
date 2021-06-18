import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import "./listCurrency.css"
import store from "../../store/store"
import CurrencySelection from "../CurrencySelection/CurrencySelection"



const ListCurrency = observer(({currentCurrency}) => {

    useEffect(() => {
        store.setListPairs(currentCurrency)
        
    }, [currentCurrency])

   

    let list = store.listCurrency.map((el, i) => {
        return <tr key={i}>
            <td>{el.title}</td>
            <td>{el.price}</td>
        </tr>
    })
  
    
    
    if (!store.listCurrency.length ) return '...loading'
    
    return (
        <div className="d-flex justify-content-center list-currency">
            <CurrencySelection 
                listCurrency={store.listCurrency}
                handleCurrentCurrency={store.handleCurrentCurrency}
                currentCurrency={currentCurrency}
             />
            <div className="card w-50">
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Валюта</th>
                                <th scope="col">Цена</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
})

export default ListCurrency