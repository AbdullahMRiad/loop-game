import Board from './components/board'
import Sidebar from './components/sidebar'
import Button from './components/ui/button'
import './index.css'
import { useState } from 'react'

function App() {
  // Add state to control sidebar open/close
  const [sidebarOpened, setSidebarOpened] = useState(false);

  return (
    <div className='flex flex-row items-center justify-center w-screen h-full'>
      <Button className='w-8 h-8 text-lg m-2 fixed top-2 left-2 z-20'
              onClick={() => setSidebarOpened(!sidebarOpened)}>☰</Button>
      <Sidebar opened={sidebarOpened}/>
      <div className='flex flex-1 items-center justify-center'><Board/></div>
    </div>
  )
}

export default App
