import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        setInputValue( target.value );
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        const item = inputValue.trim();


        // Si tiene por lo menos un caracter, .trim elimina espacios
        if(item.length <= 1) return;

        onNewCategory( item );
        setInputValue('');

    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange = { onInputChange }
            />
        </form>
    )
}
