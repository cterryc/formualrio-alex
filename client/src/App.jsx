import { useState } from 'react'
import './App.css'

function App () {
  const [count, setCount] = useState(0)

  return (
    <form className='formulario'>
      <div className='label'>
        <label>nombre</label>
        <label>telefono</label>
      </div>
      <div className='inputs'>
        <input type='text' />
        <input type='text' />
      </div>
    </form>
  )
}

export default App
