import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from './Reducers/print';
import { taskApi } from './services/taskApi';
import TaskManager from './services/TaskManager';

const App = () => {

  console.log(taskApi);

  const dispatch = useDispatch();

  const data = useSelector((state) => state.printData)
  console.log(data);

  return (
    <>
      <div>{data.name}</div>
      <button onClick={() => dispatch(changeName())} >change</button>
      <TaskManager />
    </>
  )
}

export default App