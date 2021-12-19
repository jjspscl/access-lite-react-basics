import axios from "axios";
import { ITask } from "../types/tasks";

export const fetchTask = async (
    setTasks: (tasks: ITask[]) => void
) => {
    const data = await axios.get<ITask[]>("http://localhost:5000/tasks");
    console.log(data.data)

    setTasks(data.data);
}


export const postTask = async (
    description: string,
    reminder: boolean,
    tasks: ITask[],
    setTasks: (tasks: ITask[]) => void
) => {
    const data = await axios.post<ITask[]>("http://localhost:5000/tasks", {
        description, reminder
    });

    await fetchTask(setTasks);
}

export const removeTask = async (
    id: number,
    tasks: ITask[],
    setTasks: (tasks: ITask[]) => void
) => {
    const data = await axios.delete<ITask[]>(`http://localhost:5000/tasks/${id}`);

    await fetchTask(setTasks);
}