import { makeAutoObservable } from "mobx"
import { currency } from "../api/api"


class CurrencyConvert {

    listPairs = [] 

    constructor() {
        makeAutoObservable(this)
    }

    setListPairs() {
        return currency.getList().then(res=>{
            // let arr = {
            //     currency: [...res.data.data],
            //     title: 
            // }
            
            return this.listPairs.push(...res.data.data)
        })
    }
   
}

const store = new CurrencyConvert()

export default store