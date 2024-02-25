import PageLayout from "../../layout/PageLayout";

/* eslint-disable react/prop-types */
export default function GlowButton() {
  return (
    <PageLayout
      className={
        "flex h-[100svh] w-[min(40rem,100vw-2rem)] items-center justify-center"
      }
    >
      <button className="">Glow Button</button>
    </PageLayout>
  );
}
