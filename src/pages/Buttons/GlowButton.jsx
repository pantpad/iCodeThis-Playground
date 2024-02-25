import PageLayout from "../../layout/PageLayout";

/* eslint-disable react/prop-types */
export default function GlowButton() {
  return (
    <PageLayout
      className={
        "flex h-[100svh] w-[min(40rem,100vw-2rem)] items-center justify-center"
      }
    >
      <button
        // style={{
        //   backgroundImage: `conic-gradient(from var(--a),transparent,blue,transparent)`,
        // }}
        className="relative w-fit rounded-md bg-[conic-gradient(transparent,blue,transparent)] p-2 hover:animate-[spinCustomAngle_1s_linear_infinite]"
      >
        <p className="opacity-0">Glow Button</p>
        <span className="absolute inset-1 flex items-center justify-center rounded-md bg-red-500">
          Glow Button
        </span>
      </button>
    </PageLayout>
  );
}
