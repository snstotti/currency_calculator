import React from 'react'
import { observer } from "mobx-react-lite"

export default observer(function CurrencySelection({listCurrency,handleCurrentCurrency,currentCurrency}) {

    const [state, setstate] = React.useState('RUB')

    const handleSelect =(e)=>{
        let item = e.target.innerHTML
        handleCurrentCurrency(item)
    }
    
    let itemSelect = listCurrency.map(el=>{
        return (
            <li onClick={(e)=>handleSelect(e)} key={el} className="dropdown-item" value={currentCurrency} >{el}</li>
        )
    })
    
    return (
        <div className="dropdown me-md-3 ">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            {currentCurrency}
            </button>
            <ul className="dropdown-menu" style={{minWidth:'auto'}} aria-labelledby="dropdownMenuButton">
                {itemSelect}
                {/* <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li> */}
            </ul>
        </div>
    )
})
