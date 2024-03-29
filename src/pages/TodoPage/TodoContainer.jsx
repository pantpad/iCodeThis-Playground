/* eslint-disable react/prop-types */
export default function TodoContainer({ children }) {
  return (
    <>
      <div
        id="todo-list-container"
        className="max-h-[200px] overflow-auto rounded-md border border-slate-500 p-2 text-[clamp(0.6rem,1vw+1rem,1.12rem)]"
      >
        <ul className="flex flex-col gap-4 ">{children}</ul>
      </div>
    </>
  );
}
