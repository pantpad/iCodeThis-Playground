/* eslint-disable react/prop-types */
export default function TodoButton({ className, children, ...props }) {
  return (
    <button
      className={`${className ? className + " " : ""}flex w-[64px] items-center justify-center rounded-md border border-[#2ca9bc50]`}
      {...props}
    >
      {children}
    </button>
  );
}
