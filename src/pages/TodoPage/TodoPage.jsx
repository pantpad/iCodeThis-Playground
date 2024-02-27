import { useState } from "react";

import PageLayout from "../../layout/PageLayout";
import TodoItemPage from "./TodoItemPage";
import TodoContainer from "./TodoContainer";
import TodoTitle from "./TodoTitle";
import TodoButton from "./TodoButton";

const initialTodoList = [
  {
    id: Math.floor(Math.random() * Date.now()),
    todoName: "firstTodo",
    completed: false,
    icon: "FaAccessibleIcon",
  },
  {
    id: Math.floor(Math.random() * Date.now()),
    todoName: "firstCompletedTodo",
    completed: true,
    icon: "FaShoppingBasket",
  },
];

export default function TodoPage() {
  const [todoList, setTodoList] = useState(initialTodoList);

  function handleTodoClick(id) {
    setTodoList((prev) => {
      return [
        ...prev.map((item) => {
          if (item.id === id) {
            return { ...item, completed: !item.completed };
          }
          return item;
        }),
      ];
    });
  }

  return (
    <PageLayout
      className={
        "flex h-[100vh] w-[min(28rem,100vw-2rem)] items-center justify-center border border-red-500"
      }
    >
      <div className="flex w-full flex-col gap-4 overflow-hidden rounded-md bg-white px-8 py-4 text-black max-sm:px-4">
        <section id="todos" className="flex flex-1 flex-col">
          <TodoTitle title={"Groceries"} />
          <TodoContainer>
            {todoList
              .filter((item) => item.completed === false)
              .map((item) => (
                <TodoItemPage
                  key={item.id}
                  {...item}
                  onClick={() => handleTodoClick(item.id)}
                />
              ))}
          </TodoContainer>
        </section>
        <section id="completed-todos" className="flex-1">
          <TodoTitle title={"Groceries"} />
          <TodoContainer>
            {todoList
              .filter((item) => item.completed === true)
              .map((item) => (
                <TodoItemPage
                  key={item.id}
                  {...item}
                  onClick={() => handleTodoClick(item.id)}
                />
              ))}
          </TodoContainer>
        </section>
        <section
          id="buttons"
          className="flex h-[64px] flex-wrap justify-between gap-4 overflow-auto"
        >
          <TodoButton>S</TodoButton>
          <TodoButton>
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              id="cart-add"
              xmlns="http://www.w3.org/2000/svg"
              className="max-h-[32px] max-w-[32px]"
            >
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M14,12a1,1,0,0,1-1-1V9H11a1,1,0,0,1,0-2h2V5a1,1,0,0,1,2,0V7h2a1,1,0,0,1,0,2H15v2A1,1,0,0,1,14,12Zm3,7a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,17,19Zm-6,0a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,11,19Z"
                  style={{ fill: "#2ca9bc" }}
                ></path>
                <path d="M18.22,17H9.8a2,2,0,0,1-2-1.55L5.2,4H3A1,1,0,0,1,3,2H5.2a2,2,0,0,1,2,1.55L9.8,15h8.42L20,7.76A1,1,0,0,1,22,8.24l-1.81,7.25A2,2,0,0,1,18.22,17Z"></path>
              </g>
            </svg>
          </TodoButton>
        </section>
      </div>
    </PageLayout>
  );
}
