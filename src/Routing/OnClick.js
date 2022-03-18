import React, { useState } from 'react'

const OnClick = () => {
    let [state,setState]=useState({
        mess:'hello'
    });
    let sayGodMorning=()=>{
        setState((state)=>({
            mess:'GoodMorning'
        }));
    };
  return (
      <><div className='contaner mx-3 mt-3'>
        <div className='row'>
      <div className='col-md-6'>
      <div className='card'>
    <div className='card-header bg-info text-white'>
        <h4>message</h4>
        </div>
        <div className='card-body'>
            <h5 className='display-3'>{state.mess}</h5>
      <button onClick={sayGodMorning}className='btn btn-success btn-sm'>GoodMorning</button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default OnClick;
