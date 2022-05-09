import { useState } from "react"

const Addtask = ({tambahTask}) => {
  const [isi,setIsi] = useState ('')
  const [tanggal, setTanggal] = useState('')
  const [reminder, setReminder] = useState('')

  const onSubmit=(e) => {
    //prevent saat akan submit 
    e.preventDefault()

    if(!isi){
      alert('Please add a task at the first ')
      return
    }

    tambahTask({isi, tanggal, reminder })

    setIsi('')
    setTanggal('')
    setReminder(false)
  }

  return (
    <form className='form-addtask' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Nama Agenda: </label>
            <input type="text" placehorder="Add Task.." value={isi} onChange={(e) => setIsi(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label>Tanggal: </label>
            <input type="text" placehorder="Tanggal.." value={tanggal}  onChange={(e) => setTanggal(e.target.value)}></input>
        </div>
        <div className='form-control-checkbox'>
            <label>Reminder: </label>
            <input type="checkbox" checked={reminder} placehorder="Reminder" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
        </div>

        <input type="submit" value="save" className=" btn btn-save"></input>
    </form>
  )
}

export default Addtask