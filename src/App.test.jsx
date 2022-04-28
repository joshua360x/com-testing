import { getByRole, render, screen, waitForElementToBeRemoved } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from "react-router-dom"

import App from "./App"
import Burger from "./components/Burger"
import List from "./components/List"




test('should render the list of burgers', async () => {




  render( <MemoryRouter>
    <List />
  </MemoryRouter>
    )
    await waitForElementToBeRemoved(screen.getByText('Loading Burgers...'))

  
  // this is a component test
  screen.getByRole('list')
  
  const searchBox = screen.getByPlaceholderText('Burger Search by Name')
  userEvent.type(searchBox, 'bacon')
  // await waitForElementToBeRemoved(screen.getByText('Hey I ran'))
  // return waitFor(() => {
    
    const burger = await screen.findAllByRole('burger')
    console.log('burger :>> ', burger);
    expect(burger.length).toEqual(1)
    // screen.debug()
    // expect(burger).toBeInTheDocument(),
    // expect(userText).toEqual()
    
  // }, { timeout: 3000 })
  
})


//// should for components testing -- not using any user events, just check to see if something is rendering
test('should render a burger component', async () => {
  const burger = {
    description: 'Tasty Burger',
    ingredients: ['beef', 'tomato'],
    name: 'The Beef N Tomato Burger'
  }
  render(<Burger {...burger} />)

  // screen.debug()
  const burgerComponent = screen.getByRole('burger')

  expect(burgerComponent).toBeInTheDocument();

})


