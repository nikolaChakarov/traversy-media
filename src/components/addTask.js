import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const currentTask = { text, day, reminder };
        onAdd(currentTask);
        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <>
            <h3>Add Task</h3>
            <form 
                className="add-form"
                onSubmit={onSubmit}
            >
                <div className="form-control">
                    <label htmlFor="">Task</label>
                    <input
                        type="text"
                        placeholder="Add Task"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="">Day &amp; Time</label>
                    <input
                        type="text"
                        placeholder="Add Day &amp; Time"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="">Set Reminder</label>
                    <input
                        type="checkbox"
                        checked={reminder}
                        value={reminder}
                        onChange={(e) => setReminder(e.currentTarget.checked)}
                    />
                </div>

                <input type="submit" value="Save Task" />
            </form>
        </>

    )
}

export default AddTask;