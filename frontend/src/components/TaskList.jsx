import { useEffect, useState } from 'react'
import { getAllTasks } from '../api/taskApi'
import TaskCard from './TaskCard'

const TaskList = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks()
            setTasks(res.data)
        }
        loadTasks()
    }, [])


    return <div>
        {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
        ))}
    </div>
}
export default TaskList