/* eslint-disable react/prop-types */

import { useRef, useState } from "react";
import TodoAddMenuIcon from "./TodoAddMenuIcon";

export default function TodoAddMenu({ onClose, onAdd }) {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const input = useRef();

  function handleIconSelection(icon) {
    setSelectedIcon(icon);
  }

  return (
    <section
      className={
        "absolute left-0 top-0 flex h-fit w-full flex-col gap-4 rounded-[inherit] bg-white p-[inherit]"
      }
    >
      <section id="category">
        <h2 className="mb-2 text-left text-xl font-medium">Category: </h2>
        <div className="grid auto-rows-[50px] grid-cols-3 grid-rows-[50px] gap-2">
          <TodoAddMenuIcon
            selectedIconState={[selectedIcon, setSelectedIcon]}
            icon={"FaAddressBook"}
            onSelect={handleIconSelection}
          />
          <TodoAddMenuIcon
            selectedIconState={[selectedIcon, setSelectedIcon]}
            icon={"FaAccusoft"}
            onSelect={handleIconSelection}
          />
          <TodoAddMenuIcon
            selectedIconState={[selectedIcon, setSelectedIcon]}
            icon={"FaArchway"}
            onSelect={handleIconSelection}
          />
          <TodoAddMenuIcon
            selectedIconState={[selectedIcon, setSelectedIcon]}
            icon={"FaApple"}
            onSelect={handleIconSelection}
          />
          <TodoAddMenuIcon
            selectedIconState={[selectedIcon, setSelectedIcon]}
            icon={"FaBandAid"}
            onSelect={handleIconSelection}
          />
          <TodoAddMenuIcon
            selectedIconState={[selectedIcon, setSelectedIcon]}
            icon={"FaPowerOff"}
            onSelect={handleIconSelection}
          />
          <TodoAddMenuIcon
            selectedIconState={[selectedIcon, setSelectedIcon]}
            icon={"FaLockOpen"}
            onSelect={handleIconSelection}
          />
          <TodoAddMenuIcon
            selectedIconState={[selectedIcon, setSelectedIcon]}
            icon={"FaCat"}
            onSelect={handleIconSelection}
          />
          <TodoAddMenuIcon
            selectedIconState={[selectedIcon, setSelectedIcon]}
            icon={"FaPeopleCarry"}
            onSelect={handleIconSelection}
          />
          <TodoAddMenuIcon
            selectedIconState={[selectedIcon, setSelectedIcon]}
            icon={"FaBath"}
            onSelect={handleIconSelection}
          />
        </div>
      </section>
      <section id="todo-name" className="flex flex-col gap-2 [&>*]:p-2">
        <input
          type="text"
          ref={input}
          className="rounded-md border border-slate-500"
          required
          placeholder="What will you todo?"
        />
        <button
          className="rounded-md bg-sky-400 font-semibold text-white"
          onClick={() => {
            if (input.current.value) {
              onAdd(input.current.value, selectedIcon);
            } else {
              alert("You must enter a todo name!");
            }
          }}
        >
          Add Todo
        </button>
      </section>
      <button
        className="rounded-md bg-red-400 p-2 text-white"
        onClick={onClose}
      >
        Go back
      </button>
    </section>
  );
}
