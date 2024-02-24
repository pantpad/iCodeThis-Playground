/* eslint-disable react/prop-types */
export default function Content({ className, children }) {
  return (
    <section
      className={`${className ? className + " " : ""}flex h-full min-w-0 flex-wrap justify-center p-8 max-md:p-4 max-sm:p-1`}
    >
      {children}
    </section>
  );
}

//
