import Axios from 'axios';

const apiKey = '&key=c40a0980435c5dba2f32f789db39a735'
const listCurrencies = '?get=currency_list'
const getRates = '?get=rates'
const listPairs = '&pairs='


const request_currencies = Axios.create({
    baseURL: 'https://currate.ru/api/',
    responseType: "json"
})

export const currency = {
    getList(){
        return request_currencies.get('https://currate.ru/api/' + listCurrencies + apiKey)
        .then(res=> res)
    }
}
export const rates = {
    getRates(...pairs){
        return request_currencies.get(getRates + listPairs + pairs + apiKey)
        .then(res=>res)
    }
}

