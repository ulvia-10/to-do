import { FaTimes } from "react-icons/fa"
const Tasks = (props) => {
  
  return (
    props.tugas.map((list) => 
    <div className="list">
    <div key = {list.id}>
        <div className="agenda"> Agenda: {list.isi}
         <FaTimes style={{color: 'black' }}
        onClick={()=>props.Ondelete(list.id)}/></div> 
        <div> Tanggal: {list.tanggal}</div>
    </div>
    </div>
  ))
}

export default Tasks

//on click di