import './App.css'
import { Cursor } from './components/cursor/Cursor'
import Navbar from './components/Navbar/Navbar'
import PageRouter from './router/PageRouter'


function App() {

  return (
    <div className='App'>
      <Cursor />
      <Navbar />
      <PageRouter />
    </div>
  )
}

export default App
