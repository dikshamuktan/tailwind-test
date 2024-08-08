import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Home from './pages/homepage';
// import Header from './script';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center h-screen'>
          
      <div className='text-center'>
        <p className='text-7xl'>Accouting <span className='text-blue-600'>made simple</span></p>
        <p className='text-7xl ' >for small business.</p>
      
        <p className=' mt-6 text-lg text-slate-600'>Most bookkeeping software is accurate, but hard to usee. We make the.<br/>
        opposite treade-off, and hope you don't get audited.
        </p>
        <div className='flex gap-4 justify-center mt-5'> 
        <Button className='rounded-full' variant="dark">Get 6 months free</Button>
      <Button variant='outline-secondary rounded-full'><i class="fa-solid fa-play text-blue-600"></i>  Watch video</Button>
      </div>
      </div>

    </div>
  )
}

export default App
