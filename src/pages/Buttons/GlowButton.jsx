import PageLayout from "../../layout/PageLayout";

/* eslint-disable react/prop-types */
export default function GlowButton() {
  return (
    <PageLayout
      className={
        "flex h-[100svh] w-[min(40rem,100vw-2rem)] items-center justify-center"
      }
    >
      <p className="mb-8 drop-shadow-md">
        A border rotating on the button&apos;s border when hovered
      </p>
      <button
        // style={{
        //   backgroundImage: `conic-gradient(from var(--a),transparent,blue,transparent)`,
        // }}
        className="hover:bg-rotating-border relative w-fit rounded-full p-2 hover:animate-[spinCustomAngle_0.5s_1] hover:ease-out"
      >
        <p className="opacity-0">Glow Button</p>
        <span className="absolute inset-[2px] flex items-center justify-center rounded-full bg-red-500">
          Glow Button
        </span>
      </button>
    </PageLayout>
  );
}
