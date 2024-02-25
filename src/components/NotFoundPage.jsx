import PageLayout from "../layout/PageLayout";
import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <PageLayout className={"w-[min(40rem,100vw-2rem)]"}>
      <div className="flex h-[80vh] flex-col items-center justify-center gap-6">
        <h1 className="text-5xl drop-shadow-md">No page has been found L:</h1>
        <button className="group w-full max-w-[20rem] bg-purple-500 px-4 py-2 text-white shadow-md transition-all  hover:scale-105 active:scale-110">
          <Link to={"/"} className="flex items-center justify-center gap-2">
            Return Home
            <span
              role="img"
              aria-label="house"
              className="opacity-0 transition-all group-hover:opacity-100"
            >
              🏠
            </span>
          </Link>
        </button>
      </div>
    </PageLayout>
  );
}
