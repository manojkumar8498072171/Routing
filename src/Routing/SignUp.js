import React from 'react';
import {Link} from'react-router-dom'

const SignUp = () => {
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
            <div className="col-md-4 m-auto">
                <div className="card">
                    <div className="card-header text-center bg-danger text-white">
                       <h5>SignUp</h5>
                    </div>
                    <div className="card-body bg-d">
                       <form>
                           <div className="form-group">
                              <input className="form-control" type="text" placeholder="username"/>
                           </div>
                           <div className="form-group">
                              <input className="form-control" type="email" placeholder="email@gmail.com"/>
                           </div>
                           <div className="form-group">
                              <input className="form-control" type="number" placeholder="+91 number"/>
                           </div>                           
                           <div className="form-group">
                              <input className="form-control"type="password" placeholder="password"/>
                           </div>
                           <div className="form-group">
                               <input className="form-control" type="password" placeholder="Confirm-password"/>
                           </div>
                           <div className="text-center">
                               <button className="btn btn-success"  type="submit"><Link to='/SignIn' className='text-white'>Submit</Link></button>
                           </div>
                           <p>Already i have account?<Link to='/SignIn'>SignIn</Link></p>
                       </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
  );
};

export default SignUp;
