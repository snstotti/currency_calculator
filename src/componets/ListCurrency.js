import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import store from "../store/store"
import CurrencySelection from "./CurrencySelection/CurrencySelection"



const ListCurrency = observer(() => {

    useEffect(() => {
        store.setListPairs()
    }, [])


    let list = store.listPairs.map((el, i) => {
        return <tr key={i}>
            <td >{el}</td>
        </tr>
    })

    if (!store.listPairs.length) return '...loading'

    return (
        <div className="d-flex justify-content-evenly">
            <CurrencySelection />
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