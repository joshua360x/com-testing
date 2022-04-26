import { render } from "@testing-library/react"
import App from "./App"




test('should render the list of burgers', async () => {
  render(<App />)

  screen.debug()

})


