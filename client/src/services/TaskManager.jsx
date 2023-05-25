import { useTasksQuery } from "./taskApi";
import CardJson from "../CardJson";
import React from 'react';

const TaskManager = () => {

    const { data , error, isLoding } = useTasksQuery();
    console.log(data);

    return (
        <>
          { isLoding && data?.map((task , i)=> <CardJson key={i} val={task} er={error} /> )}
        </>
    )
}

export default TaskManager