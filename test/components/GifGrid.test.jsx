import { render,screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
jest.mock("../../src/hooks/useFetchGifs")
describe('Test at <GifGrid/>', () => {
    
    const category = "Crash Bandicoot"

    test('should show loading at the begining', () => {
        useFetchGifs.mockReturnValue({gifs:[],isLoading:true})

        
        render(<GifGrid category={category}/>)
        expect(screen.getByText('Cargando...'))
        expect(screen.getAllByText(category))
    });

    test('should show items when useFetchGifs returns news gifs', () => {
        const gifsList=[
            {
                id:'ABC',
                title:'Crash',
                url:'http://localhost/crash.jpg'
            },
            {
                id:'CDF',
                title:'Spyro',
                url:'http://localhost/spyro.jpg'
            }
        ]
        
        useFetchGifs.mockReturnValue({gifs:gifsList,isLoading:false})
        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(2)             
    });

});