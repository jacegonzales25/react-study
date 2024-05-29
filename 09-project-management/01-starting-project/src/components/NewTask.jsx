import {useState} from 'react'

export default function NewTask({onAdd}) {

    const [enteredTask, setEntertedTask] = useState();

    function handleChange(event) {
        setEntertedTask(event.target.value);
    }

    function handleSubmit(){
        onAdd(enteredTask);
        setEntertedTask('');
    }


    return <div className="flex items-center gap-4">
        <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={enteredTask}/>
        <button onClick={handleSubmit} className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
}