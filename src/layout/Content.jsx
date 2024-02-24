/* eslint-disable react/prop-types */
export default function Content({ className, children }) {
  return (
    <main
      className={`${className ? className + " " : ""}flex h-full min-w-0 flex-wrap justify-center p-8 sm:p-2`}
    >
      {children}
    </main>
  );
}

//
