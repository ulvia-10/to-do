import Tasks from "./components/Tasks";
// import { Button } from "./components/Button";
import "./App.css";
import { useState } from "react";
import  Addtask from "./components/Addtask";

function App() {
  // ini untuk mengeset nilai awal
  const [tugas,setTugas] = useState([
    {
      id: 1,
      isi: "Main bersama Ainiera",
      tanggal: "03 Mei 2022",
      reminder: true,
    },
    {
      id: 2,
      isi: "Pergi ke Mall beli sepatu",
      tanggal: "06 Mei 2022",
      reminder: true,
    },
    {
      id: 3,
      isi: "Pergi ke salon potong rambut",
      tanggal: "06 Mei 2022",
      reminder: false,
    },
  ])



  const addingTask = (tgs) =>{
    const id = Math.floor(Math.random() * 10000) + 1 //untuk set id 
    const newTask = {id, ...tgs} //membuat task baru dari input form 
    setTugas(...tugas , newTask)
  } 


  //untuk delete task 
  const deleteTask = (id) =>{
    setTugas(tugas.filter((daftartask)=> daftartask.id !== id))
  }

  return (
    <div className="page">
      <div className="header"> My Todo List </div>
      <div className="card">
        {/* <Button/> */}
     
        {tugas.length > 0 ? (
          <Tasks key={tugas.id}
          tugas={tugas} Ondelete={deleteTask}/>) : (" Yey! Tidak ada Task ")}
          <Addtask tambahTask={addingTask}/>
      </div>

    </div>
  );
}

export default App;
