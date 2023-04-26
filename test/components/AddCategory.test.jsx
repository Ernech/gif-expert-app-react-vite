import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Test at <AddCategory/>', () => {
    
    test('Should change the value of the textbox', () => {
        render(<AddCategory onNewCategory={()=>{}}/>)
        const input = screen.getByRole('textbox')
        fireEvent.input(input, { target:{value:'Dogs'} })
        expect(input.value).toBe('Dogs')   
    });

    test('should call onNewCategory if input has some value', () => {
        const inputValue = "Dogs"
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory}/>)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, { target:{ value:inputValue } })
        fireEvent.submit(form);
        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    
    });

    test('should not call on new category if input value is empty ', () => {
        const inputValue = "" 
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory}/>)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, { target:{ value:inputValue } })
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0)
        
    });

});