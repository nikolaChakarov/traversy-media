const AddTask = () => {
    return (
        <>
            <h3>Add Task</h3>
            <form
                className="add-form"
            >
                <div className="form-control">
                    <label htmlFor="">Task</label>
                    <input type="text" placeholder="Add Task"/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Day &amp; Time</label>
                    <input type="text" placeholder="Add Day &amp; Time"/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Set Reminder</label>
                    <input type="checkbox" />
                </div>

                <input type="submit" value="Save Task"/>
            </form>
        </>

    )
}

export default AddTask;