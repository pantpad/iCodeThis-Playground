/* eslint-disable react/prop-types */
export default function TodoButton({ children, ...props }) {
  return (
    <button
      className="flex aspect-square w-[100px] items-center justify-center rounded-md bg-slate-100"
      {...props}
    >
      {children}
    </button>
  );
}
