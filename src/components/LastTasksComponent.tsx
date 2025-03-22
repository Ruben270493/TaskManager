interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
  interface LastTasksComponentProps {
    tasks: Task[];
  }
  
  export default function LastTasksComponent({ tasks }: LastTasksComponentProps) {
    return (
      <div className="last-tasks">
        <h2>Últimas tareas</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }