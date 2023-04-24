import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiffExpertApp = () => {

    const [categories, setCategories] = useState(['dogs'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories([newCategory,...categories])

    }


    return (
        <>
            <h1>Gif expert app</h1>
            <AddCategory onNewCategory={value => onAddCategory(value)} />
            {/* <button onClick={onAddCategory}>Agregar</button>  */}
                {
                categories.map(category => 
                 <GifGrid 
                        category={category} 
                        key={category}
                    />
                )}
           
        </>
    )
}