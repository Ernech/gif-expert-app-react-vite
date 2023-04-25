import { GifItem } from "../../src/components/GifItem";
import {render, screen} from '@testing-library/react';


describe('Test at <GIfItem/>', () => {
  const url = "https://media4.giphy.com/media/2C2qwckZzyiz8UzvzK/giphy.gif?cid=f39c7d815ksqw6wil18rddwi1i867qgfzub5mxcqvysglrb7&ep=v1_gifs_search&rid=giphy.gif&ct=g"
  const title = "Dog What GIF by Best Friends Animal Society"
    
  test('should match with snapshot', () => {
        const {container} = render(<GifItem title={title} url ={url}/>)   
        expect(container).toMatchSnapshot()     
    });

  test('Should show the image with the URL and the ALT',()=>{

    render(<GifItem title={title} url={url}/>)
    const {src, alt} = screen.getByRole("img")
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('Should show the title inside the component', () => {
    render(<GifItem title={title} url={url}/>)
    expect(screen.getByText(title)).toBeTruthy()
  });

})
