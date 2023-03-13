import {useState} from "react";

export default function TaskForm({createTask}) {

    const [title, setTitle] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const handleSubmit = (e )=> {
        e.preventDefault();
        
        createTask({
          title,descripcion
        });

        setTitle('');
        setDescripcion('');
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Escribe Tu Tarea" 
        onChange={e => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea name="" id="" placeholder="Descripcion" cols="20" rows="5" onChange={e => setDescripcion(e.target.value)} value={descripcion}></textarea>
      <button>Guardar</button>
    </form>
  );
}
