import React, { useState } from 'react';

function Todos() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const handleDelete = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-color-black-500">
            <div className="bg-dark p-6 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-semibold mb-4">Todo List</h1>

                {/* Todo Input */}
                <div className="mb-4">
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Add a new task..."
                        value={task}
                        onChange={handleTaskChange}
                    />
                </div>

                {/* Add Task Button */}
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4"
                    onClick={handleAddTask}
                >
                    Add Task
                </button>
                <br />
                <hr />
                <span className='flex items-center bg-black-500 font-bold font-serif'>TODO LIST</span>

                {/* Todo List */}
                <div className='caret-amber-50 content-center'>
                    <ul className="space-y-2">
                        {tasks.map((task, index) => (
                            <li className={`flex items-center bg-blue-400-500 `} key={index}>
                                <input type="checkbox" className="mr-2 form-checkbox rounded-md" />
                                <span>{task}</span>
                                <button className="ml-auto text-red-500" onClick={() => handleDelete(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Todos;
