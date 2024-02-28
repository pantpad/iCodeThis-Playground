/* eslint-disable react/prop-types */

import { useRef } from "react";

export default function TodoAddMenu({ onClose, onAdd }) {
  const input = useRef();

  return (
    <section
      className={
        "absolute left-0 top-0 flex h-full w-full flex-col gap-4 bg-white p-[inherit]"
      }
    >
      <section id="category">
        <h2>Category: </h2>
        <div className="grid grid-cols-3 gap-2">
          <article className="border border-slate-400">Icon</article>
          <article className="border border-slate-400">Icon</article>
          <article className="border border-slate-400">Icon</article>
          <article className="border border-slate-400">Icon</article>
        </div>
      </section>
      <section id="todo-name" className="flex flex-col gap-2 [&>*]:p-2">
        <input
          type="text"
          ref={input}
          className="rounded-md border border-slate-500"
        />
        <button
          className="rounded-md bg-sky-400"
          onClick={() => {
            onAdd(input.current.value);
          }}
        >
          Add Todo
        </button>
      </section>
      <button className="text-red-500" onClick={onClose}>
        Go back
      </button>
    </section>
  );
}
