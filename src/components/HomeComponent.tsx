import { useState, useEffect } from 'react';
import LastTasksComponent from './LastTasksComponent';
import TaskFormComponent from './TaskFormComponent';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function HomeComponent() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Cargar tareas desde localStorage al iniciar
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      try {
        setTasks(JSON.parse(storedTasks));
      } catch (error) {
        console.error('Error parsing tasks:', error);
      }
    }
  }, []);

  // Guardar tareas en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Función para añadir una nueva tarea
  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <div>
        <h1>Hola mundo!</h1>
        <TaskFormComponent onAddTask={addTask} />
      </div>
      {tasks.length > 0 && <LastTasksComponent tasks={tasks} />}
    </>
  );
}