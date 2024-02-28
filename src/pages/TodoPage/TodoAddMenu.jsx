/* eslint-disable react/prop-types */

import { useRef } from "react";
import TodoFAIcon from "./TodoFAIcon";

export default function TodoAddMenu({ onClose, onAdd }) {
  let selectedIcon = null;
  const input = useRef();

  function handleIconSelection(icon) {
    console.log(selectedIcon);
    selectedIcon = icon;
  }

  return (
    <section
      className={
        "absolute left-0 top-0 flex h-fit w-full flex-col gap-4 bg-white p-[inherit]"
      }
    >
      <section id="category">
        <h2 className="mb-2 text-left text-xl font-medium">Category: </h2>
        <div className="grid auto-rows-[50px] grid-cols-3 grid-rows-[50px] gap-2">
          <button
            className={`${selectedIcon === "FaAddressBook" ? "bg-red-200 " : ""}flex items-center justify-center border border-slate-400 focus:bg-red-100`}
            onClick={() => {
              handleIconSelection("FaAddressBook");
            }}
          >
            <TodoFAIcon
              icon={"FaAddressBook"}
              className={"h-full w-full p-2"}
            />
          </button>
          <button
            className="flex items-center justify-center border border-slate-400 focus:bg-red-100"
            onClick={() => {
              handleIconSelection("FaAccusoft");
            }}
          >
            <TodoFAIcon icon={"FaAccusoft"} className={"h-full w-full p-2"} />
          </button>
          <button
            className="flex items-center justify-center border border-slate-400 focus:bg-red-100"
            onClick={() => {
              handleIconSelection("FaArchway");
            }}
          >
            <TodoFAIcon icon={"FaArchway"} className={"h-full w-full p-2"} />
          </button>
          <button
            className="flex items-center justify-center border border-slate-400 focus:bg-red-100"
            onClick={() => {
              handleIconSelection("FaApple");
            }}
          >
            <TodoFAIcon icon={"FaApple"} className={"h-full w-full p-2"} />
          </button>
          <button
            className="flex items-center justify-center border border-slate-400 focus:bg-red-100"
            onClick={() => {
              handleIconSelection("FaBandAid");
            }}
          >
            <TodoFAIcon icon={"FaBandAid"} className={"h-full w-full p-2"} />
          </button>
          <button
            className="flex items-center justify-center border border-slate-400 focus:bg-red-100"
            onClick={() => {
              handleIconSelection("FaPowerOff");
            }}
          >
            <TodoFAIcon icon={"FaPowerOff"} className={"h-full w-full p-2"} />
          </button>
          <button
            className="flex items-center justify-center border border-slate-400 focus:bg-red-100"
            onClick={() => {
              handleIconSelection("FaRobot");
            }}
          >
            <TodoFAIcon icon={"FaRobot"} className={"h-full w-full p-2"} />
          </button>
          <button
            className="flex items-center justify-center border border-slate-400 focus:bg-red-100"
            onClick={() => {
              handleIconSelection("FaLockOpen");
            }}
          >
            <TodoFAIcon icon={"FaLockOpen"} className={"h-full w-full p-2"} />
          </button>
          <button
            className="flex items-center justify-center border border-slate-400 focus:bg-red-100"
            onClick={() => {
              handleIconSelection("FaCat");
            }}
          >
            <TodoFAIcon icon={"FaCat"} className={"h-full w-full p-2"} />
          </button>
          <button
            className="flex items-center justify-center border border-slate-400 focus:bg-red-100"
            onClick={() => {
              handleIconSelection("FaPeopleCarry");
            }}
          >
            <TodoFAIcon
              icon={"FaPeopleCarry"}
              className={"h-full w-full p-2"}
            />
          </button>
        </div>
      </section>
      <section id="todo-name" className="flex flex-col gap-2 [&>*]:p-2">
        <input
          type="text"
          ref={input}
          className="rounded-md border border-slate-500"
          required
        />
        <button
          className="rounded-md bg-sky-400 font-semibold text-white"
          onClick={() => {
            if (input.current.value) {
              onAdd(input.current.value, selectedIcon);
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
