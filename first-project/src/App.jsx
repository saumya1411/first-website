// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/Hero'
// import Hero from './components/Hero'

import Navigation from "./components/Navigation"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       hello world
//     </>
//   )
// }

// export default App

const App = () => {
  return (
  <div>
   <Navigation/>
   <HeroSection/>
     
    </div>
    )
}

export default App
