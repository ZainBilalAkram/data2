import React from 'react'
import Form from './Form';
import List from './List';

const Home = ({change,change2,val,val2,click,data,del,edit,red}) => {
  return (
    <>

    <Form change={change} val={val} val2={val2} change2={change2} click={click}  />
    <List data={data} del={del} edit={edit}  red={red}/>
    
    
    </>
  )
}

export default Home