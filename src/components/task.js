import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, toggleReminder }) => {

    const selected = task.reminder ? 'selected task' : 'task';

    return (
        <div
            className={selected}
            onDoubleClick={() => toggleReminder(task.id)}
        >
            <h3>{task.text}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.dat}</p>
        </div>
    )
}

export default Task;