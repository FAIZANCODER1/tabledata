import React, { useEffect, useState } from 'react'
import '../App.css'

const Table = () => {
  const [data,setdata] =  useState([])
  const [moves ,setmoves]= useState([])
  
const move=()=>{
console.log("move")
}
const Checks=(item,e)=>{
 console.log(item)

}
const fetchdata=async()=>{
let url = 'https://retoolapi.dev/weui4s/data'
let res= await fetch (url)
let resjson=await res.json()
setdata(resjson)

}
    useEffect(()=>{
      fetchdata();
      console.log('useeffect')
    },[])

    return (
    <>
    <div className='container'>


    <button onClick={move} className='btns' >Move</button>
   <div className='container p-4'>
   <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email Address</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Hobby</th>


    </tr>
  </thead>
  <tbody>
  {

data.map((item,i)=>{
  return(
    <>
  <tr className='datas' key={item.id}>
  <td><input type='checkbox' 
  checked={item.selected}
  className="form-check-input"
  id="rowcheck{e.id}"
  onChange={(e) => Checks(item,e)}
  /></td>
  <td>{item["Column 1"]}</td>
  <td>{item["Column 2"]}</td>
  <td>{item["Column 3"]}</td>
  <td>{item["Column 4"]}</td>
  <td>{item["Column 5"]}</td>




  </tr>
   {
   }
    </>
  )
})
}


 
</tbody>
     </table>

   </div>
   </div>
    </>
  )
}

export default Table