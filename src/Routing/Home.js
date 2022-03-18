import React from 'react'
import {Link} from'react-router-dom' 
const Home = () => {
  return (
    <div>
      <h2 className='text-lg text-danger text-center mt-3'>WELCOME TO ACCOUNT<h5>Go to your account.<Link to="/Account" className="btn bg-dark text-white">Open</Link></h5></h2>
      <h1 className='text-success text-center p-5 '>successfully,created.</h1>
    </div>
  )
}

export default Home;
