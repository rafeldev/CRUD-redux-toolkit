import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
//uuid
import { v4 as uuid } from "uuid";

//slices
import { addTask, editTask } from "../features/tasks/taskSlices";

export const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const tareas = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask({ ...task, id: params.id }));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  useEffect(() => {
    console.log(tareas);
    if (params.id) {
      setTask(tareas.find((tarea) => tarea.id === params.id));
    }
  }, [params.id, tareas]);

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4 ">
      <label className="block text-xs font-bold mb-1" htmlFor="Titulo">
        Task:
      </label>
      <input
        name="title"
        type="text"
        placeholder="Title"
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <label className="block text-xs font-bold mb-1" htmlFor="Decription">
        Decription:
      </label>
      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <button className="bg-indigo-600 px-2 py-1 rounded-md">Save</button>
    </form>
  );
};
