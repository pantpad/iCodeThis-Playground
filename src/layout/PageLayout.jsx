/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function PageLayout({ className, children }) {
  return (
    <>
      <main
        className={`${className ? className + " " : ""}mx-auto flex min-w-0 flex-col p-4 text-center`}
      >
        {children}
      </main>
      <footer className="flex justify-center gap-2">
        <p>Go back</p>
        <Link to={"/"} className="cursor-pointer text-amber-400">
          Home
        </Link>
      </footer>
    </>
  );
}

//
