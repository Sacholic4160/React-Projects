import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Main() {
  return (
    <div>
      <p>use this function here only        
      </p>
    </div>
  )
}

const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'click me to visit google'
}  //we cannot use it directly to render because the method in react is expecting a specified type of structure of code 

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit google</a>
)  // we can use this and it will work because in this it is a standard format 

//alternate way so that we can able to use reactElement 

const reactElement2 = React.createElement('a', { href:"https://google.com", target:"_blank"},'click me to visit google')  //this is the
//way to create react element using react.createElement method without a function

ReactDOM.createRoot(document.getElementById('root')).render(
 /* <React.StrictMode>
   
  //   Main()  
  //   anotherElement
  //   </>
  //reactElement2  
  
    // we can also use it as App()
 // </React.StrictMode>,*/
<App />

)
