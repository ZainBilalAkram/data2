
import './App.css';
import Home from './Component/Home';
import axios from 'axios';
import { useState } from 'react';
function App(props) {
  const [val, setval] = useState("")
  const [val2, setval2] = useState("")
  const [data, setdata] = useState([])
  const [editindex, setindex] = useState(0)
  const [cond, setcond] = useState(true)

  const change = ((e) => {

    setval(
      e.target.value
    )
  })
  const change2 = ((e) => {
    setval2(
      e.target.value
    )
  })
  const click = ((e) => {
    e.preventDefault()
    if (cond) {
      var obj = {
        name: val,
        price: val2, 
      }
      setdata([
        ...data, obj
      ])
    }
    else {
      var pre = data
      pre[editindex].name = val
      pre[editindex].price = val2
    

      setdata(pre)

      setcond(
        true
      )


    }
   

  })

  const del = ((i) => {
    var delte = data
    delte.splice(i, 1)
    setdata(
      [...delte
      ])
  })

  const edit = ((i) => {
    var pre = data[i]
    setval(
      pre.name
    )
    setval2(
      pre.price
    )
    setcond(
      false
    )
    setindex(
      i
    )
  })
  console.log(data,"array data");
  const red=data.reduce((acc,curr)=>{
    return acc=parseInt(acc)+parseInt(curr.price)
  },0)
  console.log(red,"reduced");
  return (
    <>
      <Home change={change} val={val} val2={val2} change2={change2} click={click} data={data} del={del} edit={edit}  red={red} />
    </>
  );
}

export default App;
