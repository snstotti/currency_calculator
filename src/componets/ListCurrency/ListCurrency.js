import React from "react"
import { observer } from "mobx-react-lite"
import "./listCurrency.css"
import CurrencySelection from "../CurrencySelection/CurrencySelection"


const ListCurrency = ({listCurrency,setSelect,newValue}) => {

    let list = listCurrency.map((el, i) => {
        return <tr key={i}>
            <td>{el.title}</td>
            <td>{el.price}</td>
        </tr>
    })
  
    // console.log(listCurrency);
    
    // if (!value.listCurrency.length ) return '...loading'
    
    return (
        <div className="d-flex justify-content-center list-currency">
            <CurrencySelection setSelect={setSelect} newValue={newValue} />
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
}

export default observer(ListCurrency)