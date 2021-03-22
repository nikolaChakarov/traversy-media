import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Tasks from './components/tasks';
import './styles/app.css';
import AddTask from './components/addTask';
import About from './components/about';


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

    // Fetch Task
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`);
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
    const toggleReminder = async (id) => {

        const taskToToggle = await fetchTask(id);
        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)
        });

        const data = await res.json();

        setTasks(tasks.map(el => {
            return el.id === id ? { ...el, reminder: data.reminder } : el
        }));
    }

    return (
        <Router>
            <div>
                <Header
                    showAddTask={showAddTask}
                    setShowAddTask={setShowAddTask}
                />


                <Route path="/" exact render={(props) => (
                    <>
                        {showAddTask && <AddTask onAdd={addTask} />}
                        {tasks.length > 0 ?
                            <Tasks
                                tasks={tasks}
                                onDelete={deleteTask}
                                toggleReminder={toggleReminder}
                            /> : 'No Tasks to Show'}
                    </>
                )} />

                <Route path="/about" component={About} />
                <Footer />
            </div>
        </Router>
    )
}



export default App;