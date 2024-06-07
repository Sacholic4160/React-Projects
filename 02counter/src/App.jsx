import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15); //this is react hooks used to propogate state changes and there is a variable named counte 
  //and a method to update this variable

  let maxCounter = 20
  let minCounter = 0
  const addValue = () => {
   if(counter >= maxCounter){
    alert("You have reached the maximum limit")
   }
  else { setCounter( counter+1)
    console.log('value added',counter)}
  }
  const removeValue = () => {
    if(counter <= minCounter){
      alert("You have reached the minimum limit")
    }
   else { setCounter( counter-1)
     console.log('value removed',counter)}
   }
 
  return (
    <>
    <h1>Sachin | React</h1>
    <h2>Counter value: {counter}</h2>

  <button
  onClick={addValue}
  >Add value</button>
  <br />
  <button
  onClick={removeValue}
  >Remove value</button>

    </>
  )
}

export default App
