import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react"

describe('Test at useFetchGifs', () => {

    test('should return the initial state', () => {
        
        const {result} = renderHook(()=> useFetchGifs('Crash bandicoot'))
        const {gifs, isLoading} = result.current;

        expect(gifs.length).toBe(0)
        expect(isLoading).toBeTruthy()

        

    });

    test('should return an array of images and isLoading equal to false', async() => {
        
        const {result} = renderHook(()=> useFetchGifs('Crash bandicoot'))
        await waitFor(
            ()=> expect( result.current.gifs.length).toBeGreaterThan(0),
        );
        
        const {gifs, isLoading} = result.current;
        
        expect(gifs.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()



    });

});