import { useState } from 'react'
import './App.css'
import Header from './views/components/Header'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
