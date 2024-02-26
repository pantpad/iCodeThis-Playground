import PageLayout from "../../layout/PageLayout";
import TodoItemPage from "./TodoItemPage";
import TodoContainer from "./TodoContainer";
export default function TodoPage() {
  return (
    <PageLayout
      className={
        "flex h-[100vh] w-[min(25rem,100vw-2rem)] items-center justify-center border border-red-500"
      }
    >
      <div className="flex w-full flex-col overflow-hidden rounded-md bg-white px-8 py-4 text-black max-sm:px-4">
        <section id="todos" className="flex flex-col">
          <div id="title" className="flex items-center justify-start gap-4">
            <svg
              fill="#000000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8"
            >
              <g id="SVGRepo_iconCarrier">
                <path
                  id="secondary"
                  d="M18.5,20.5A1.5,1.5,0,1,1,17,19,1.5,1.5,0,0,1,18.5,20.5ZM11,19a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,11,19Z"
                  style={{ fill: "#2ca9bc" }}
                ></path>
                <path
                  id="primary"
                  d="M18.2,14a1,1,0,0,0,.93-.63l2.8-7a1,1,0,0,0-.1-.93A1,1,0,0,0,21,5H7.88l-.7-1.74A2,2,0,0,0,5.32,2H3A1,1,0,0,0,3,4H5.32L8.9,13,7.83,15.11A2,2,0,0,0,9.62,18H19a1,1,0,0,0,0-2H9.62l1-2Z"
                  style={{ fill: "#000000" }}
                ></path>
              </g>
            </svg>
            <h1 className="text-xl">Groceries</h1>
          </div>
          <TodoContainer>
            {[...Array(5)].map((item, index) => (
              <TodoItemPage key={index} todoName={"notCompletedTodo"} />
            ))}
          </TodoContainer>
        </section>
        <section id="completed-todos">
          <TodoContainer>
            {[...Array(5)].map((item, index) => (
              <TodoItemPage key={index} todoName={"completedTodo"} />
            ))}
          </TodoContainer>
        </section>
        <section id="buttons">buttons</section>
      </div>
    </PageLayout>
  );
}
