import { action,  makeAutoObservable } from "mobx"
import axios from 'axios';


class CurrencyConvert {
    
    listSelectCurrency = [] 
    listCurrency = []
    currentCurrency = 'RUB'
    currencyPrice = 0
    currency = 'AUD'

    
  

    constructor() {
        makeAutoObservable(this,{
            handleCurrentCurrency: action.bound,
            setListPrice: action.bound,
            setListCurrency: action.bound,
            // getPrice: action.bound,
        })
    }

    // получаем список валют и их цену относительно базовой валюты для таблицы
    setListPrice(rate) {
        let baseURL = 'https://api.exchangerate.host/latest'
        const simbols = '&symbols=USD,EUR,RUB,JPY,GBP,CHF,CAD,AUD,NZD'
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

    // получаем список валют для выпадающего списка
    setListCurrency(elem){
        let baseURL = 'https://api.exchangerate.host/latest'
        const simbols = '?symbols=USD,EUR,RUB,JPY,GBP,CHF,CAD,AUD,NZD'
        
        axios.get(baseURL + simbols)
            .then(action(res => {
                
                let obj = res.data.rates
                for (var prop in obj) {
                    
                    this.listSelectCurrency.push(prop)

                }
                this.listSelectCurrency=[]
            }))
    }

    getPrice=(currency)=> {
        let baseURL = 'https://api.exchangerate.host/latest'
        const simbols = '?symbols='
        
        axios.get(baseURL + simbols + currency)
            .then(action(res => {
                
                let obj = res.data.rates
                for (var prop in obj) {
                   
                    this.currencyPrice = +obj[prop]
                }
                
                return this.currencyPrice 
            }))
    }

}

const store = new CurrencyConvert()

export default store