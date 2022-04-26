import { getByRole, render, screen, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

import App from "./App"




test('should render the list of burgers', async () => {
  render(<App />)

  // screen.debug()

  // this is a component test
  const list = screen.getByRole('list')

  const searchBox = screen.getByRole('textbox')
  const userText = userEvent.type(searchBox, 'fish')


  return waitFor(() => {

    expect(list).toBeInTheDocument(),
    expect(userText).toEqual()
    
  })

})


