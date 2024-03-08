import { useState } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <header className="relative flex flex-wrap items-center justify-between border border-black/35 max-[350px]:justify-center">
        <div className="flex p-4">
          <img src="" alt="img" className="h-8 w-8" />
          <h1 className="text-[clamp(1rem,1vw+1rem,2.5rem)] font-semibold text-amber-400">
            Title Of The Page
          </h1>
        </div>
        <nav>
          <ul className="hidden gap-2 text-amber-400 md:flex [&>*]:cursor-pointer [&>*]:p-4">
            <li>element 1</li>
            <li>element 2</li>
            <li>element 3</li>
          </ul>
          <div>
            <button
              onClick={toggleNav}
              className="mx-auto p-4 text-center text-3xl font-semibold text-amber-400 hover:brightness-110 md:hidden"
            >
              {isOpen ? "x" : "="}
            </button>
          </div>
        </nav>
        {isOpen && (
          <ul className="flex basis-full flex-col items-center justify-center gap-2 text-amber-400 md:flex md:hidden [&>*]:cursor-pointer [&>*]:p-4">
            <li>element 1</li>
            <li>element 2</li>
            <li>element 3</li>
          </ul>
        )}
      </header>
    </>
  );
}
