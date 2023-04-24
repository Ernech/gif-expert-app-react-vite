import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    const submitForm = (event) =>{ 
        event.preventDefault()
        const newInputVale=inputValue.trim()
        if(newInputVale.length<=1) return
       onNewCategory( newInputVale )
       setInputValue('')

    }

  return (
    <form onSubmit={submitForm}>
        <input type='text' placeholder='Buscar gifs' value={inputValue} onChange={onInputChange}/>
    </form>
    
  )
}
