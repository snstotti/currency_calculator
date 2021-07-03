import { observer } from 'mobx-react';
import React from 'react'

export default observer(function CurrencyEntryForm({setInputValue,inputValue}) {
    
    const handleChange = (e) =>{
        const value = e.target.value
        setInputValue(value);
    }

    return (
        <div>
            <form>
                <div className="mb-4">
                    <input 
                        onChange={handleChange}
                        value={inputValue}
                        type="number" 
                        style={{maxWidth: 400}}
                        className="form-control" 
                        id="exampleInputEmail1" 
                        placeholder='Введите значение' />
                </div>
            </form>
        </div>
    )
})
