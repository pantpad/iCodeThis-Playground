import Inspo from "../../layout/Inspo";
import PageLayout from "../../layout/PageLayout";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import GppGoodIcon from "@mui/icons-material/GppGood";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useState } from "react";

//emailDetails
//headsetDetails
let detailCache = {
  info: (
    <>
      <section className="flex justify-around gap-2 p-4 [&_span]:h-6 [&_span]:w-6 [&_span]:cursor-pointer [&_span]:transition-all [&_span]:duration-150 hover:[&_span]:scale-125">
        <span className="rounded-full border border-white bg-black"></span>
        <span className="rounded-full border border-white bg-sky-400"></span>
        <span className="rounded-full border border-white bg-yellow-400"></span>
        <span className="rounded-full border border-white bg-purple-400"></span>
        <span className="rounded-full border border-white bg-red-400"></span>
        <span className="rounded-full border border-white bg-green-400"></span>
      </section>
    </>
  ),
  headset: (
    <>
      <section id="form" className="flex flex-col gap-2 p-4">
        <div className="flex justify-center gap-4">
          <HeadsetMicIcon className="!h-12 !w-12 text-sky-400" />
          <div className="flex flex-1 flex-col items-start gap-2 text-start">
            <h2 className="text-3xl">Hi</h2>
            <p className="text-sm">
              One of our consultants will assist you as soon as they can!
            </p>
          </div>
        </div>
        <div className="flex min-w-0 flex-col items-start gap-[5px]">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full rounded-md border border-white/35 bg-transparent p-2"
          />
        </div>
        <div className="flex min-w-0 flex-col items-start gap-[5px]">
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            id="Email"
            className="w-full rounded-md border border-white/35 bg-transparent p-2"
          />
        </div>
        <div className="flex min-w-0 flex-col items-start gap-[5px]">
          <label htmlFor="Phone">Phone</label>
          <input
            type="text"
            id="Phone"
            className="w-full rounded-md border border-white/35 bg-transparent p-2"
          />
        </div>
        <div className="flex min-w-0 flex-col items-start gap-[5px]">
          <label htmlFor="Message">Message</label>
          <textarea
            type="text"
            id="Message"
            className="w-full rounded-md border border-white/35 bg-transparent p-2"
          />
        </div>
        <button className="mt-2 w-full rounded-md bg-red-600 p-2 text-center text-white">
          Start Chat
        </button>
      </section>
    </>
  ),
  shield: (
    <>
      <h1>shield</h1>
    </>
  ),
  email: (
    <>
      <h1>email</h1>
    </>
  ),
};

export default function FormDarkTheme() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [currentDetail, setCurrentDetail] = useState(null);

  let selectedDetail = detailCache[currentDetail] ?? "";

  return (
    <>
      <Inspo href={"https://icodethis.com/submissions/71507"} />
      <PageLayout
        className={"h-[100vh] w-[min(35rem,100vw-2rem)] items-center"}
      >
        <div className="relative w-full">
          <section
            id="bar"
            className="relative mt-10 flex w-full overflow-hidden rounded-lg border border-white/35 
            [&_article]:bg-black/20 
            [&_article]:transition-all 
            [&_article]:duration-300 
            hover:[&_article]:bg-black/50 
            active:[&_article]:bg-black/70 
            active:[&_article]:duration-[50ms]"
          >
            <article
              className="flex flex-1 cursor-pointer items-center justify-center border-r border-white/35 p-8 max-sm:p-4"
              onClick={() => {
                setIsContentVisible((prev) => !prev);
                setCurrentDetail("info");
              }}
            >
              <MoreHorizIcon className="!h-8 !w-8 text-sky-400" />
            </article>
            <article
              className="flex flex-1 cursor-pointer items-center justify-center border-r border-white/35 p-8 max-sm:p-4"
              onClick={() => {
                setIsContentVisible((prev) => !prev);
                setCurrentDetail("headset");
              }}
            >
              <HeadsetMicIcon className="!h-8 !w-8 text-sky-400" />
            </article>
            <article
              className="relative flex flex-1 cursor-pointer items-center justify-center border-r border-white/35 p-8 max-sm:p-4"
              onClick={() => {
                setIsContentVisible((prev) => !prev);
                setCurrentDetail("shield");
              }}
            >
              <GppGoodIcon className="!h-8 !w-8 text-sky-400" />
            </article>
            <article
              className="flex flex-1 cursor-pointer items-center justify-center p-8 max-sm:p-4"
              onClick={() => {
                setIsContentVisible((prev) => !prev);
                setCurrentDetail("email");
              }}
            >
              <DraftsIcon className="!h-8 !w-8 text-sky-400" />
            </article>
          </section>
          {isContentVisible ? (
            <>
              <div className="absolute left-0 top-[110%] w-full rounded-md border border-white/35">
                {selectedDetail}
              </div>
            </>
          ) : null}
        </div>
      </PageLayout>
    </>
  );
}
