/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import "./List.css"
import axios  from 'axios'
import {toast} from  'react-toastify'

const List = ({url}) => {

  // const url  = "http://localhost:4000"
  //store data from db to state variable
  const  [list,setList] = useState([]);

  const fetchList = async () =>{
//api  call to fetch data from db
const response = await axios.get(`${url}/api/food/list`);
if (response.data.success) {
  setList(response.data.data);
}
else{
  toast.error("Error")
}
  }

  //for cross icon
  const  removeFood = async (foodId) => {
    //api call
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    }
  else{
    toast.error("error")
  }
}


  useEffect(()=>{
    fetchList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className='list add flex-col'>
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
            </div>
          )
        })}
        </div> 
    </div>
  )
}

export default List
