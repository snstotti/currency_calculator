import { get, makeAutoObservable } from "mobx"
import { currency } from "../api/api"


class CurrencyConvert {

    listPairs = [] 
    listCurrency = []
    currentCurrency = 'RUB'

    constructor() {
        makeAutoObservable(this)
    }

    setListPairs() {
        return currency.getList().then(res=>{

            let listCurency = res.data.data
            let filterArr = listCurency.filter(el=>el.slice(-3)===this.currentCurrency)
            this.listPairs.push(...filterArr)
            console.log('setListPairs');
        })
    }

    setListCurrency(){
        return currency.getList().then(res=>{
            let currency = res.data.data.map(el=>el.slice(3))
            return this.listCurrency.push(...new Set(currency))
        })
    }

    handleCurrentCurrency=(item)=>{
        
     this.currentCurrency = this.currentCurrency = item
        
        console.log(this.currentCurrency);
    }

   
}

const store = new CurrencyConvert()

export default store