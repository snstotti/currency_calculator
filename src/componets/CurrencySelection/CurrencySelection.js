import { inject, observer } from 'mobx-react'
import React from 'react'


const CurrencySelection =  ({value,setSelect,newValue})=> {

    const {listSelectCurrency} = value

    const handleSelect =(e)=>{
        let item = e.target.value
        setSelect(item)
    }

    let sortArr = (arr,elem) =>{
        let newArr = []
        arr.map(el=>{
            if(el === elem){
                return  newArr.unshift(el)
            }else{return newArr.push(el)}
             
        })
        return newArr
    }
   
    let itemSelect = sortArr(listSelectCurrency,newValue).map(el=>{
        return(
            <option key={el} value={el}>{el}</option>
        )
    })
    
    return (
        <select
            onChange={handleSelect}
            className='custom-select'
            style={{ height: 'fit-content' }}>
            {itemSelect}
        </select>
    )
}
export default inject('value')(observer(CurrencySelection))