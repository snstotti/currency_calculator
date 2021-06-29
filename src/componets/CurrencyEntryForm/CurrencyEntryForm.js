import React from 'react'

export default function CurrencyEntryForm() {
    return (
        <div>
            <form>
                <div className="mb-4">
                    <input 
                        type="number" 
                        style={{maxWidth: 400}}
                        className="form-control" 
                        id="exampleInputEmail1" 
                        placeholder='Введите значение' />
                </div>
            </form>
        </div>
    )
}
