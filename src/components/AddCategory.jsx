import React, { useState } from 'react'
import PropTypes from 'prop-types'
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
    <form onSubmit={submitForm} aria-label='form'>
        <input type='text' placeholder='Buscar gifs' value={inputValue} onChange={onInputChange}/>
    </form>
    
  )
}

AddCategory.propTypes={
  onNewCategory: PropTypes.func.isRequired
}