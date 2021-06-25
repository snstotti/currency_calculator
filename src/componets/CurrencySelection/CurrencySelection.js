import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'
import React from 'react'

const CurrencySelection =  inject('value')(observer(({value,setSelect})=> {

    const {listSelectCurrency,currentCurrency} = value

    const handleSelect =(e)=>{
        let item = e.target.value
        setSelect(item)
    }

    let sortArr = (arr,elem) =>{
        let newArr = []
        arr.map(el=>{
            if(el==elem){
                newArr.unshift(el)
            }else{newArr.push(el)}
             
            
        })
        return newArr
    }

    // console.log(sortArr(listSelectCurrency,currentCurrency));
   
    
    let itemSelect = sortArr(listSelectCurrency,currentCurrency).map(el=>{
        return(
            <option key={el} value={el}>{el}</option>
        )
    })
   
    return (
        <select onChange={(e)=>handleSelect(e)} className='custom-select' style={{height: 'fit-content'}}>
            {itemSelect}
        </select>
    )
}))
export default CurrencySelection