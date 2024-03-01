export default function Inspo({ ...props }) {
  return (
    <>
      <section className="">
        <a {...props} target="_blank">
          {" "}
          Inspo
          <span className="text-blue drop-shadow-md hover:text-yellow-300">
            {" "}
            here
          </span>
        </a>
      </section>
    </>
  );
}
