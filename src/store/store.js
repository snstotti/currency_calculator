import { makeAutoObservable } from "mobx"
import { currency } from "../api/api"


class CurrencyConvert {

    listPairs = [] 

    constructor() {
        makeAutoObservable(this)
    }

    setListPairs() {
        return currency.getList().then(res=>this.listPairs.push(...res.data.data))
    }
   
}

const store = new CurrencyConvert()

export default store