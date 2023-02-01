import AppClima from "./components/AppClima"
import { ClimaProvider } from './context/ClimaProvider'

function App() {

  return (
    <ClimaProvider>
      <header>
        <h1>Clima App ALBELÁEZ</h1>
        <h4>Buscador de clima</h4>
      </header>
      <AppClima />

    </ClimaProvider>
  )
}

export default App
