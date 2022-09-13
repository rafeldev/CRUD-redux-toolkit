import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//redux
import { deleteTask } from "../features/tasks/taskSlices";

export const TaskList = () => {
  const stateTasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>Tasks {stateTasks.length}</h1>

        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
        >
          Create Task
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {stateTasks.map((item) => {
          return (
            <div key={item.id} className="bg-neutral-800 p-4 rounded-md">
              <header className="flex justify-between">
                <h3>{item.title}</h3>
                <div className="flex gap-x-2">
                  <Link
                    to={`/edit-task/${item.id}`}
                    className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 px-2 py-1 text-xs rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </header>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
