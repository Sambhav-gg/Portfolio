import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.png'
import './index.css'
import Portfolio from './components/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Portfolio/>
    </div>
  )
}

export default App
