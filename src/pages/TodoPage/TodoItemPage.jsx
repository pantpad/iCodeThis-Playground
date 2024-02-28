/* eslint-disable react/prop-types */
import TodoFAIcon from "./TodoFAIcon";

export default function TodoItemPage({
  id,
  icon,
  todoName,
  completed,
  onRemove,
  ...props
}) {
  let completedClass = "opacity-60";

  return (
    <>
      <li
        className={`${completed ? completedClass + " " : ""}flex items-center p-2 transition-all duration-300 hover:bg-slate-100`}
        {...props}
      >
        <div className="flex items-center gap-2">
          <TodoFAIcon icon={icon} />
          <p>{todoName}</p>
        </div>
        <button
          className="ml-auto [&>*]:transition-all [&>*]:duration-300"
          onClick={!completed ? () => onRemove(id) : () => {}}
        >
          <TodoFAIcon
            className={`${completed ? "text-sm hover:text-green-400" : "text-sm hover:text-red-500"}`}
            icon={`${completed ? "FaArrowCircleUp" : "FaTrash"}`}
          />
        </button>
      </li>
    </>
  );
}
