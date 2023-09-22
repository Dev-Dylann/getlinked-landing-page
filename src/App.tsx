import 'tailwindcss/tailwind.css'
import {Routes, Route} from 'react-router-dom'
import Landing from './components/Landing'
import Contact from './components/Contact'
import Register from './components/Register'

function App() {

  return (
    <Routes>
      <Route path='/' index element={<Landing />} />
      <Route path='contact' element={<Contact />} />
      <Route path='register' element={<Register />} />
    </Routes>
  )
}

export default App
