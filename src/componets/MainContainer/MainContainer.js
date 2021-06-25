import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import CurrencyCalc from '../CurrencyCalc/CurrencyCalc'
import ListCurrency from '../ListCurrency/ListCurrency'
import Menu from '../Menu/Menu'



export default inject('value')(observer(function MainContainer({value}) {
    const {listCurrency,currentCurrency,setListCurrency,setListPrice}=value

    const [select,setSelect] = React.useState(currentCurrency)

    
   
    React.useEffect(() => {
        setListCurrency(currentCurrency)
        setListPrice(select)
    }, [select,listCurrency,currentCurrency])
    
    // if(!listCurrency.length)return '...Loading'
    return (
       
            <div className="container">

                <div className="mb-3">
                    <Menu />
                </div>

                <Switch>
                    <Route path='/list_currency' render={() => <ListCurrency 
                        setSelect={setSelect} 
                        newValue={select} 
                        listCurrency={listCurrency}/>} />
                    <Route path='/calculator' component={CurrencyCalc} />
                    <Redirect from='/' to='/list_currency' />
                </Switch>
            </div>
       
    )
}))
