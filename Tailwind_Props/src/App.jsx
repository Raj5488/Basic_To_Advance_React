import './App.css'
import Card from './components/Card'

function App() {
  let newObj = {
    userName  : "jiturajsharma",
    age: 24
  }
  let newArr = [1,2,3,4,5]
  return (
    <>
      <Card name="Jitu Sharma" btnText = "click me"/>
      <Card name="Mitu Sharma" btnText = " "/>
    </>
  )  
}

export default App
