import React from 'react'

const Expenceitem = ({item,del,i,edit,red}) => {
  console.log(item,i);
  return (
    <>

  
    <div className='div'>
      <p>{item.name}</p>
      <p>{item.price}</p>
      <button className='btn1' onClick={()=>{del(i)}} >Del</button>
      <button className='btn2' onClick={()=>{edit(i)}}>Edit</button>
    </div>
    <div className="Evaluation">{red}</div>

    </>
  ) 
}

export default Expenceitem