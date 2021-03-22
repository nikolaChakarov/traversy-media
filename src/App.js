import { useState } from 'react';
import Header from './components/header';
import Tasks from './components/tasks';
import './styles/app.css';
import AddTask from './components/addTask';

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            dat: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            dat: 'Feb 6th at 1:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Food Shopping',
            dat: 'Feb 5th at 2:30pm',
            reminder: false
        }
    ]);

    // Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000 + 1);
        const newTask = { ...task, id };
        setTasks([...tasks, newTask]);
    }

    // Delete Task
    const deleteTask = (id) => {
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