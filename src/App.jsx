import TaskLi from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.descripcion
    }]);
  }

  return (
    <div>
      <TaskForm createTask={createTask}/>
      <TaskLi tasks={tasks} />
    </div>
  );
}
export default App;
