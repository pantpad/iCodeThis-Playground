import Inspo from "../../layout/Inspo";
import PageLayout from "../../layout/PageLayout";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

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
          className="flex h-16 w-full rounded-lg border border-white/35"
        >
          <article>
            <MoreHorizIcon />
          </article>
          <article></article>
          <article></article>
          <article></article>
        </section>
      </PageLayout>
    </>
  );
}
