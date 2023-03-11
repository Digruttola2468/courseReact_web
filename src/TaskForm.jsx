import {useState} from "react";

export default function TaskForm({createTask}) {

    const [title, setTitle] = useState("")

    const handleSubmit = (e )=> {
        e.preventDefault();
        
        createTask(title);
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Escribe Tu Tarea" 
        onChange={e => setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}
