/* eslint-disable react/prop-types */
import TodoFAIcon from "./TodoFAIcon";

export default function TodoItemPage({ icon, todoName }) {
  console.log(icon);

  return (
    <>
      <li className="flex items-center p-2 transition-all duration-300 hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <TodoFAIcon icon={icon} />
          <p>{todoName}</p>
        </div>
        <button className="ml-auto transition-all duration-300 hover:text-red-500">
          <TodoFAIcon icon={"FaTrash"} />
        </button>
      </li>
    </>
  );
}
