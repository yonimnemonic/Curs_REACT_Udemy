import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');//string vacio

    const handleInputChange = (e)=>{
        setInputValue(e.target.value);

        console.log('handleInputChange llamado...')
    }
    const handleSubmit = (e)=>{
        e.preventDefault(); //previene el submit por defecto del formulario
        console.log('Handle Sumit', inputValue)

        if( inputValue.trim().length > 2){//Verificas que si el imput value es mayor a 2 letras entonces modificas el hook
            setCategories(cats => [inputValue, ...cats ]);
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{ inputValue }</p>
            <input
                type="text"
                value={ inputValue}
                onChange={ handleInputChange}
            />  
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
