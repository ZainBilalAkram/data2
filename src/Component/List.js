import React from 'react'
import Expenceitem from './Expenceitem';

const List = ({data,del,edit,red}) => {

  console.log(data);
  return (

    <>  
        {data.map((e,i) => {
          return(
          <Expenceitem item={e} i={i} del={del} edit={edit} red={red}/> 
          )
        })}

        

    </>
  )
}

export default List