import { action, makeAutoObservable, observable } from "mobx"
import { currency } from "../api/api"


class CurrencyConvert {
    
    listPrice = [] 
    listCurrency = []
    currentCurrency = {currency: 'RUB'}

    constructor() {
        makeAutoObservable(this)
    }

    setListPairs(rate) {

         currency.getList(rate).then(action(data => {
            this.listCurrency=[]
            let obj = data.data.rates
            for (var prop in obj) {
                let newObj = {
                    price:obj[prop],
                    title:prop
                }
                this.listCurrency.push(newObj)
            }
            
            console.log('render list:', this.listCurrency.length);
        }))
        
    }

    // setListCurrency(){
    //     return currency.getList().then(data=>{
            
    //     })
    // }

    handleCurrentCurrency=(item)=>{
        this.item = item
        let newObj = {currency: item}
        
        this.currentCurrency.currency = this.item
        
    }

   
}

const store = new CurrencyConvert()

export default store