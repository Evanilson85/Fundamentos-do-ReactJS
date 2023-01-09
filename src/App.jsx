import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import { Post } from './components/Post.jsx'

import style from './App.module.css'
import './global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author='Evanilson'
            content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto itaque autem explicabo eos. Deleniti, expedita voluptate in nam quia debitis molestiae asperiores odio, laborum, assumenda culpa animi officia quasi harum. zx'
          />
          <Post 
            author='Evanilson'
            content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto itaque autem explicabo eos. Deleniti, expedita voluptate in nam quia debitis molestiae asperiores odio, laborum, assumenda culpa animi officia quasi harum. zx'
          />
        </main>
      </div>

    </div>
  )
}

export default App
