import { action,  makeAutoObservable } from "mobx"
import axios from 'axios';





class CurrencyConvert {
    
    listSelectCurrency = [] 
    listCurrency = []
    currentCurrency = 'RUB'
    currencyPrice = {price:0}

    constructor() {
        makeAutoObservable(this,{
            handleCurrentCurrency: action.bound,
            setListPrice: action.bound,
            setListCurrency: action.bound,
            getPrice: action.bound,
        })
    }

    // получаем список валют и их цену относительно базовой валюты для таблицы
    setListPrice(rate) {
        let baseURL = 'https://api.exchangerate.host/latest'
        const simbols = '&symbols=USD,EUR,RUB,JPY,GBP,CHF,CAD,AUD,NZD'
        const base = `?base=${rate}`

        axios.get(baseURL + base + simbols)
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
    setListCurrency(elem) {
        let baseURL = 'https://api.exchangerate.host/latest'
        const simbols = '?symbols=USD,EUR,RUB,JPY,GBP,CHF,CAD,AUD,NZD'

        axios.get(baseURL + simbols)
            .then(action(res => {

                let obj = res.data.rates
                for (var prop in obj) {
                    if(prop === elem){
                          this.listSelectCurrency.unshift(prop)
                    }else{ this.listSelectCurrency.push(prop)}
                   
                }
                this.listSelectCurrency = []
            }))
    }

    // получаем цену валюты относительно базовой валюты для калькулятора
    getPrice(currency,baseCurrency) {
        let baseURL = 'https://api.exchangerate.host/latest'
        const simbols = `&symbols=${currency}`
        const base = `?base=${baseCurrency}`

        axios.get(baseURL + base  + simbols)
            .then(action(res => {
                
                let obj = res.data.rates
                for (var prop in obj) {
                    this.currencyPrice.price = +obj[prop]
                }
            }))
            
    }
}

const store = new CurrencyConvert()

export default store