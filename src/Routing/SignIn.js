import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <React.Fragment>
      <div className='container text-center'>
        <div className='row'>
          <div className='col-md-4 m-auto'>
            <div className='card mt-3 '>
            <div className='card-body'>
              <h3>SigIn</h3>
              <div  className='mt-3'>
                <input  type="text" placeholder='Email'/>
              </div>
              <div  className='mt-3'>
                <input  type="password" placeholder='Password'/>
              </div>
              <div className='mt-2'>
              <input type="checkbox"/>
              <label className='mx-3'> Remember Password</label><br/>
              </div>
            <button className='btn btn-sm btn-block bg-success ' type='submit '><Link to='/Home' className=' text-white'>LogIn</Link></button><br/><hr/>
            <button  className=' btn btn-sm mt-3 btn-block bg-danger text-white'><i class="bi bi-google mx-3"></i>Sign in with google</button>
            <button  className=' btn btn-sm btn-block mt-3 bg-primary text-white '> <i class="bi bi-facebook mx-3"></i>Sign in with facebook</button><br/>
            <p>Don't have an account? <Link to='/SignUp'>SignUp</Link></p>
          </div>
          </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SignIn
