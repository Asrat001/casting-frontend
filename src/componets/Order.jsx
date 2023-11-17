import React, { useState } from 'react'
import Pagetation from './Pagetation'
import Modal from './Modal'

const Order = () => {
  const [isOpen , setOpen]=useState(false)
  const  data =[
    {id:1,
    name:'John',
    phoneNumber:"09876543",
    role:"model , actress"
  },
    {id:2,
      name:'John M',
      phoneNumber:"09876543",
      role:"model , actress"
    },
      {id:3,
        name:'John S',
        phoneNumber:"09876543",
        role:"model , actress"
      },
        {id:4,
          name:'John D',
          phoneNumber:"09876543",
          role:"model , actress"
        },
  ]
  return (
    <div className="">
   
    <div className="w-full">
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl font-bold mb-4">order Management</h2>
        <div className="flex items-center">
          <select className="border border-gray-300 rounded  px-4 py-2 focus:outline-none">
            <option value=""disabled>status</option>
            <option value="">Conformed</option>
            <option value="category2">Matched</option>
            <option value="category2">Not comformed</option>
          </select>
     
        </div>

        <table className="min-w-full divide-y divide-gray-200 ">
          <thead className="bg-gray-50">
            <tr className=" w-full">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                orders
              </th>
           
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                status
              </th>
         
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider ">
                Action
              </th>
         
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  Asrat Adane
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  09145674534
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button onClick={()=>{setOpen(true)}} className="text-sm text-blue-500  p-1  border-[1px] border-orange-700">see all</button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">not comformed</div>
              </td>
              <td className="py-4 whitespace-nowrap">
                <ul className='grid grid-cols-3 justify-items-center place-items-center'>
                  <l>
                    <button className=' text-green-500 border-[2px] border-gray-600 p-1'>conform</button>
                  </l>
                  <l>
                    <button className=' text-sky-500 border-[2px] border-gray-600 p-1'>Matched</button>
                  </l>
                  <l>
                    <button className=' text-red-500 border-[2px] border-gray-600 p-1'>Delete</button>
                  </l>
                </ul>
              </td>
        
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Pagetation/>
    <Modal
    isOpen={isOpen}
    onClose={()=>{setOpen(false)}}
    className={` fixed top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] `}
    >
    <p className=' text-[18px]'> <span className=' text-orange-600 font-semibold '>Asrat Adane </span>have Ordered <span className=' font-bold'>{data.length} </span>casts</p>
    <ol className=' list-decimal mt-[50px] '>
      {
        data.map((data,index)=>{
          return (<li
             key={index}
             className=' flex  justify-between items-center'
          >
            <p> {data.name}</p> 
            <p> {data.phoneNumber}</p>
            <p>{data.role}</p>
            </li>)
        })
      }
    </ol>
    </Modal>
  </div>
  )
}

export default Order