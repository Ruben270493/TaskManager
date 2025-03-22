import { useState } from "react";

interface TaskFormProps {
    onAddTask: (task: string) => void;
}

export default function TaskFormComponent({ onAddTask }: TaskFormProps) {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newTask.trim()) {
            onAddTask(newTask);
            setNewTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Escribe una nueva tarea"
                required
            />
            <button type="submit">Añadir</button>
        </form>
    );
}