import React from 'react'
import Addtask from './Addtask';

const Newtask = () => {
    const onSaveDataHandler = (enteredTaskData) => {
        const enteredData = {
          ...enteredTaskData, 
          id: Math.random().toString()
        };
        console.log(enteredData)
      }
  return (
      <div className='new-expense'>
      <Addtask onSaveData = {onSaveDataHandler }/>
  </div>
  )
}

export default Newtask