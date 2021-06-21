import React, { useState } from 'react'
import { observer } from "mobx-react-lite"

export default function CurrencySelection({listCurrency,setstate,currentValue}) {

    // const [state, setstate] = useState('')
   
    const handleSelect =(e)=>{
        let item = e.target.innerHTML
        setstate(item)
    }
    // console.log(props);
    
    let itemSelect = listCurrency.map((el,i)=>{
        return (
            <li 
                onClick={(e)=>handleSelect(e)} 
                key={i} 
                className="dropdown-item" 
                value={el.title}>{el.title}
            </li>
        )
    })
   
    return (
        <div className="dropdown me-md-3 ">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            {currentValue}
            </button>  
            <ul className="dropdown-menu" style={{minWidth:'auto'}} aria-labelledby="dropdownMenuButton">
                {itemSelect}
            </ul>
        </div>
    )
}
