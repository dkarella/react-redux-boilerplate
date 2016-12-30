import React from 'react'

const Home = props => (
  <div>
    <h1>Home</h1>
    <button onClick={props.incrementCount}>Increment</button>
    <p>Count: {props.count}</p>
  </div>
)

export default Home
