import Content from "../layout/Content";
import PageLayout from "../layout/PageLayout";
import Card from "../ui/Card/Card";

export default function Landing() {
  return (
    <>
      <PageLayout className={"w-[min(56rem,100vw-2rem)]"}>
        <header>
          <h1 className="text-3xl font-bold text-white drop-shadow-lg">
            iCodeThis - React
          </h1>
        </header>
        <Content
          className={
            "grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4"
          }
        >
          <Card
            headline={"Conic Radial Border"}
            text={"conic radial border on hover using a button"}
            action={"Enter"}
            image={"./conic-radial-button.png"}
          ></Card>
          {[...Array(9)].map((e, index) => (
            <Card
              key={index}
              headline={"Headline"}
              text={"Supporting Text"}
              action={"Enter"}
              image={"./firsttest.png"}
            ></Card>
          ))}
        </Content>
        <footer>
          <p>
            Thanks to{" "}
            <a
              href="https://twitter.com/florinpop1705"
              className="transition-all hover:text-sky-500 hover:drop-shadow-sm"
            >
              @florinpop
            </a>{" "}
            +{" "}
            <a
              href="https://icodethis.com/Chris"
              className="transition-all hover:text-sky-500 hover:drop-shadow-sm"
            >
              @chris
            </a>
          </p>
        </footer>
      </PageLayout>
    </>
  );
}
