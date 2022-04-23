import React from 'react'
import Nav from './Nav'
import Routes from './Routes'

function App() {
  return (
    <main>
      <Nav />
      <div className="container">
        <h1 className="mt-3">Welcome to the shopping cart!</h1>
        <Routes />
      </div>
    </main>
  )
}

export default App
