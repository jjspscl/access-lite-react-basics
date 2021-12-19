import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import TaskForm from './components/TaskForm';
import { Box, Center, Divider } from '@chakra-ui/react'
import TaskList from './components/TaskList';
import Header from './components/Header';
import { ITask } from './types/tasks';
import { fetchTask, postTask, removeTask } from './service';


function App() {
  const [display, setDisplay] = useState(true);
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      description: 'First Task',
      reminder: false
    },
    {
      id: 2,
      description: 'Second Task',
      reminder: false
    },
    {
      id: 3,
      description: 'Third Task',
      reminder: false
    },
  ]);

  useEffect(() => {
    fetchTask(setTasks);
    // console.log(data)
    // setTasks(e);
  }, [])

  const deleteTask = (id: number) => {
    removeTask(id, tasks, setTasks);
  };

  const addTask = (description: string, reminder: boolean) => {
    const newItem = {
        id: Math.floor(Math.random() * 1000),
        description,
        reminder
      }

    postTask(description, reminder, tasks, setTasks);
    // setTasks([...tasks, newItem])
  }

  return (
    <Center>
      <Box backgroundColor="whitesmoke" padding="5" mt="20" width="75vw">
        <Header 
          title="Task Tracker"
          formShown={display}
          toggleForm={
            () => {
              setDisplay(!display);
            }
          }/>
        <TaskForm submit={addTask}/>
        <Divider/>
        <TaskList tasks={tasks} deleteTask={deleteTask}/>
      </Box>
    </Center>
  );
}

export default App;
