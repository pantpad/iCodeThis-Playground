/* eslint-disable react/prop-types */
export default function PageLayout({ className, children }) {
  return (
    <body
      className={`${className ? className + " " : ""}mx-auto flex flex-col p-4 text-center`}
    >
      {children}
    </body>
  );
}

//
