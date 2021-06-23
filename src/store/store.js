import { action,  makeAutoObservable, observable } from "mobx"
import axios from 'axios';
import { currency } from "../api/api"


class CurrencyConvert {
    
    listSelectCurrency = [] 
    listCurrency = []
    currentCurrency = 'RUB'

    
  

    constructor() {
        makeAutoObservable(this,{
            handleCurrentCurrency: action.bound,
            setListPrice: action.bound,
            setListCurrency: action.bound,
        })
    }

    // получаем список валют и их цену относительно базовой валюты
    setListPrice(rate) {
        let baseURL = 'https://api.exchangerate.host/latest'
        const simbols = '&symbols=USD,EUR,RUB'
        const base = '?base='
        
       
        axios.get(baseURL + base + rate + simbols)
            .then(action(res => {
                
                let obj = res.data.rates
                for (var prop in obj) {
                    let newObj = {
                        price: obj[prop],
                        title: prop
                    }
                    this.listCurrency.push(newObj)
                }
            }))
            this.listCurrency.length=0
    }

    setListCurrency(){
        let baseURL = 'https://api.exchangerate.host/latest'
        const simbols = '?symbols=USD,EUR,RUB'
        
        axios.get(baseURL + simbols)
            .then(action(res => {
                
                let obj = res.data.rates
                for (var prop in obj) {
                    
                    this.listSelectCurrency.push(prop)
                }
                this.listSelectCurrency=[]
            }))
    }

    handleCurrentCurrency(item){
        return this.currentCurrency = item
        // console.log(this.currentCurrency);
    }
   
   
}

const store = new CurrencyConvert()

export default store