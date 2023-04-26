import { render, screen, fireEvent } from "@testing-library/react";
import { GiffExpertApp } from "../src/GifExpertApp"


describe('Test at <GifExpertApp/>.', () => {
    test('should match with snapshot', () => {
       const {container}= render(<GiffExpertApp/>)
        expect(container).toMatchSnapshot()
    });

    test('should add a new category',()=>{
        const inputValue = "Dogs"
        render(<GiffExpertApp/>)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, { target:{ value:inputValue } })
        fireEvent.submit(form);
        expect(screen.getAllByRole('heading',{level:3}).length).toBe(2)
    
    })

    test('should not add a new category if already exists', () => {
        render(<GiffExpertApp/>)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, { target:{ value:"Crash Bandicoot" } })
        fireEvent.submit(form);
        fireEvent.input(input, { target:{ value:"Megadeth" } })
        fireEvent.submit(form);
        fireEvent.input(input, { target:{ value:"Crash Bandicoot" } })
        fireEvent.submit(form);
        expect(screen.getAllByRole('heading',{level:3}).length).toBe(3)
    
    });
});