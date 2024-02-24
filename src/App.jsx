import Content from "./layout/Content";
import PageLayout from "./layout/PageLayout";

function App() {
  return (
    <>
      <PageLayout className={"w-[min(60rem,100vw-2rem)]"}>
        <header>
          <h1>iCodeThis - React</h1>
        </header>
        <Content className={"flex-col gap-4"}>
          {[...Array(10)].map((e, i) => (
            <article className="busterCards" key={i}>
              ♦{i}
            </article>
          ))}
        </Content>
        <footer>
          <p>Thanks to @florinpop + @chris</p>
        </footer>
      </PageLayout>
    </>
  );
}

export default App;
