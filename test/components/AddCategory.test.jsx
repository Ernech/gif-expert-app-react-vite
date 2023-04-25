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
        render(<AddCategory onNewCategory={()=>{}}/>)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, { target:{ value:inputValue } })
        fireEvent.submit(form);
        expect(input.value).toBe('')
    });

});