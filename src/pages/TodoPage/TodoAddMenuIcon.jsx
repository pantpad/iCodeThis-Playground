/* eslint-disable react/prop-types */

import TodoFAIcon from "./TodoFAIcon";

export default function TodoAddMenuIcon({ selectedIconState, icon, onSelect }) {
  const [selectedIcon] = selectedIconState;

  return (
    <>
      <button
        className={`${selectedIcon === icon ? "bg-sky-300 " : ""}flex items-center justify-center rounded-md border border-slate-400 transition-all duration-200 hover:bg-sky-200`}
        onClick={() => {
          onSelect(icon);
        }}
      >
        <TodoFAIcon icon={icon} className={"h-full w-full p-2"} />
      </button>
    </>
  );
}
