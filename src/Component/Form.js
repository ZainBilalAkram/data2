import React from 'react'
import List from './List'

const Form = ({change,change2,val,val2,click}) => {
  return (
   <div>
    <div className='container'>
      <form>
        <div className='input-div'>
        <input className='input' value={val} onChange={change}></input><br/>
        <input className='input1' type="number" value={val2} onChange={change2}></input><br/>
        <button className='btn' onClick={click} >Click </button>
        </div>

      </form>
    </div>
 
   </div>
  )
}

export default Form