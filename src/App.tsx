import Board from './components/board'
import Sidebar from './components/sidebar'
import './index.css'
import { useState } from 'react'

function App() {
  // Add state to control sidebar open/close
  const [sidebarOpened, setSidebarOpened] = useState(false);

  return (
    <div className='flex flex-row items-center justify-center w-screen h-full'>
      <button className='w-8 h-8 rounded-xl text-lg m-2 fixed
                         top-2 left-2 transition-all bg-gray-100
                         outline-4 outline-black shadow-[0_5px_0_2px_rgba(0,0,0,1)]
                         hover:bg-gray-200 hover:scale-102 active:scale-98
                         active:bg-gray-300'
              onClick={() => setSidebarOpened(!sidebarOpened)}>☰</button>
      <Sidebar opened={sidebarOpened}/>
      <div className='flex flex-1 items-center justify-center'><Board/></div>
    </div>
  )
}

export default App
