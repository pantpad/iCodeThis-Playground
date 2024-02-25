/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Card({
  headline,
  subhead,
  text,
  action,
  image,
  link,
  className,
}) {
  console.log(link);
  return (
    <article
      className={`${className ? className + " " : ""}card elevated-card group relative flex flex-col`}
      draggable
      onDragStart={(e) => {
        e.target.classList.add("dragged");
      }}
      onDragEnd={(e) => {
        e.target.classList.remove("dragged");
      }}
    >
      <section className="flex max-h-40 justify-center overflow-hidden rounded-[12px] bg-[#f7f2fa] p-1 opacity-80">
        {image ? (
          <img
            className="h-full w-full rounded-[12px] border-b-[1px] object-cover transition-all duration-300 ease-in-out group-hover:scale-[1.08]"
            src={image}
          />
        ) : null}
      </section>
      <section className="flex flex-1 flex-col items-start px-4 py-2">
        {headline ? (
          <h1 className="text-2xl font-semibold">{headline}</h1>
        ) : null}
        {subhead ? <h2>{subhead}</h2> : null}
        {text ? <p className="text-sm">{text}</p> : null}
        {action ? (
          <div className="flex">
            <Link to={link}>
              <button className="relative mt-4 overflow-hidden rounded-full bg-[#6750a4] px-8 py-2 text-sm font-semibold text-white transition-all  hover:scale-[1.025] active:scale-105">
                {action}
              </button>
            </Link>
          </div>
        ) : null}
      </section>
    </article>
  );
}
