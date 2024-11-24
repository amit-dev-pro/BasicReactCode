
import './App.css'
import Ticket from './Ticket'
 
 
 

function App() {
 

  return (
    <>
      <Ticket ticket={[0,1,2]}></Ticket>
      <Ticket ticket={[1,5,8,9]}></Ticket>
    </>
  )
}

export default App
