import Inspo from "../../layout/Inspo";
import PageLayout from "../../layout/PageLayout";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import GppGoodIcon from "@mui/icons-material/GppGood";
import DraftsIcon from "@mui/icons-material/Drafts";

export default function FormDarkTheme() {
  return (
    <>
      <Inspo href={"https://icodethis.com/submissions/71507"} />
      <PageLayout
        className={
          "h-[97vh] w-[min(35rem,100vw-2rem)] items-center justify-center"
        }
      >
        <section
          id="bar"
          className="flex w-full overflow-hidden rounded-lg border border-white/35"
        >
          <article className="flex flex-1 items-center justify-center p-8">
            <MoreHorizIcon className="!h-8 !w-8 text-sky-400" />
          </article>
          <article className="flex flex-1 items-center justify-center p-8">
            <HeadsetMicIcon className="!h-8 !w-8 text-sky-400" />
          </article>
          <article className="flex flex-1 items-center justify-center p-8">
            <GppGoodIcon className="!h-8 !w-8 text-sky-400" />
          </article>
          <article className="flex flex-1 items-center justify-center p-8">
            <DraftsIcon className="!h-8 !w-8 text-sky-400" />
          </article>
        </section>
      </PageLayout>
    </>
  );
}
