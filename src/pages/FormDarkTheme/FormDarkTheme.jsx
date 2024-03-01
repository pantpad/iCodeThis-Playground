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
      <h1>headset</h1>
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
        className={
          "h-[97vh] w-[min(35rem,100vw-2rem)] items-center justify-center"
        }
      >
        <div className="relative w-full">
          <section
            id="bar"
            className="relative flex w-full overflow-hidden rounded-lg border border-white/35 
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
