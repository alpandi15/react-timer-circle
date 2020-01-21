import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Selamat Datang di React</h2>
      <ul>
        <li>
          <Link to="/countdown">Count Down</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
