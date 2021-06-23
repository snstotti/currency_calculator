import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'
import React from 'react'

const CurrencySelection =  inject('value')(observer(({value,setSelect,newValue})=> {

    const {listSelectCurrency,handleCurrentCurrency,currentCurrency} = value

    // const [select,setSelect] = React.useState(currentCurrency)

    const handleSelect =(e)=>{
        let item = e.target.value
        setSelect(item)
        // handleCurrentCurrency(item)
        // value.currentCurrency = item
        // console.log(item);
    }
   
    
    let itemSelect = listSelectCurrency.map(el=>{
        return (
            <option 
                
                key={el} 
                
                value={el}> {el} </option>
        )
    })
   
    return (
        <select onChange={(e)=>handleSelect(e)} className="custom-select" style={{height: 'fit-content'}}>
            {itemSelect}
        </select>
    )
}))
export default CurrencySelection