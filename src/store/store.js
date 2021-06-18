import { action, makeAutoObservable } from "mobx"
import { currency } from "../api/api"


class CurrencyConvert {

    listPrice = [] 
    listCurrency = []
    currentCurrency = {currency: 'RUB'}

    constructor() {
        makeAutoObservable(this)
    }

    setListPairs(rate) {
        return currency.getList(rate).then(action(data => {
            
            let obj = data.data.rates
            for (var prop in obj) {
                let newObj = {
                    price:obj[prop],
                    title:prop
                }
                this.listCurrency.push(newObj)
            }
            

        }))
        
    }

    // setListCurrency(){
    //     return currency.getList().then(data=>{
            
    //     })
    // }

    handleCurrentCurrency=(item)=>{

        let newObj = {currency: item}
        
        this.currentCurrency = newObj
        
    }

   
}

const store = new CurrencyConvert()

export default store