import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import store from "../store/store"



const ListCurrency = observer(()=>{
    
    useEffect(() => {
        store.setListPairs()
    },[])
    
    let list = store.listPairs.map(el=> (<li key={el}>{el}</li>))

    if(!store.listPairs.length) return '...loading'

    return(
        <div>
            <ul>{list}</ul>
        </div>
    )
})

export default ListCurrency