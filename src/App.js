import { useState, useEffect } from 'react';
import Header from './components/header';
import Tasks from './components/tasks';
import './styles/app.css';
import AddTask from './components/addTask';

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchedTasks();
            setTasks(tasksFromServer);
        }

        getTasks();
    }, []);

    // Fetch Tasks
    const fetchedTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks');
        const data = await res.json();
        return data;
    }

    // Add Task
    const addTask = async (task) => {
        // const id = Math.floor(Math.random() * 10000 + 1);
        // const newTask = { ...task, id };
        // setTasks([...tasks, newTask]);

        const data = await (await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json'
            }
        })).json();
        setTasks([...tasks, data]);
    }

    // Delete Task
    const deleteTask = async (id) => {

        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        });

        setTasks(tasks.filter(el => el.id !== id));
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map(el => {
            return el.id === id ? { ...el, reminder: !el.reminder } : el
        }));
    }

    return (
        <div>
            <Header
                showAddTask={showAddTask}
                setShowAddTask={setShowAddTask}
            />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ?
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    toggleReminder={toggleReminder}
                /> : 'No Tasks to Show'}
        </div>
    )
}



export default App;