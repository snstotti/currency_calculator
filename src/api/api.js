import Axios from 'axios';

const apiKey = '&key=c40a0980435c5dba2f32f789db39a735'
const base = '?base='
const getRates = '?get=rates'
const listPairs = '&pairs='


const request_currencies = Axios.create({
    baseURL: 'https://api.exchangerate.host/latest',
    responseType: "json"
})

export const currency = {
    getList(rate){
        return request_currencies.get(base + rate)
        .then(res=> res)
    }
}
export const rates = {
    getRates(...pairs){
        return request_currencies.get(getRates + listPairs + pairs + apiKey)
        .then(res=>res)
    }
}

