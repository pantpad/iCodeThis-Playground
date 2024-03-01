import { useState } from "react";

import PageLayout from "../../layout/PageLayout";
import TodoItemPage from "./TodoItemPage";
import TodoContainer from "./TodoContainer";
import TodoTitle from "./TodoTitle";
import TodoButton from "./TodoButton";
import TodoAddMenu from "./TodoAddMenu";

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
  const [isAdding, setIsAdding] = useState(false);

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

  function handleRemoveTodo(id) {
    setTodoList((prev) => {
      return [...prev.filter((item) => item.id !== id)];
    });
  }

  function handleNewTodoPage() {
    setIsAdding((prev) => !prev);
  }

  function handleAddNewTodo(input, selectedIcon = "FaAccessibleIcon") {
    setTodoList((prev) => {
      return [
        ...prev,
        {
          id: Math.floor(Math.random() * Date.now()),
          todoName: input,
          completed: false,
          icon: selectedIcon,
        },
      ];
    });
    handleNewTodoPage();
  }

  return (
    <>
      <section className="">
        <a href="https://icodethis.com/submissions/68474" target="_blank">
          {" "}
          Inspo
          <span className="text-blue drop-shadow-md hover:text-yellow-300">
            {" "}
            here
          </span>
        </a>
      </section>
      <PageLayout
        className={
          "relative flex h-[100vh] w-[min(28rem,100vw-2rem)] items-center justify-center"
        }
      >
        <div className="relative flex w-full flex-col gap-4 rounded-xl bg-white p-8 text-black max-sm:px-4">
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
                    onRemove={handleRemoveTodo}
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
            <div className="group relative">
              <TodoButton className={"h-[64px] group-hover:bg-slate-100"}>
                S
              </TodoButton>
              <span className="absolute left-[110%] top-1 origin-left scale-x-0 text-left text-[rgba(29,205,232,1)] transition-all duration-200 ease-in-out group-hover:scale-x-100">
                More Confetti
              </span>
            </div>
            <TodoButton
              className={
                "relative h-[64px] after:absolute after:right-[110%]  after:top-1 after:origin-right after:scale-x-0 after:text-[rgba(29,205,232,1)] after:transition-all after:duration-200 after:ease-in-out after:content-['Add_Todo'] hover:after:scale-x-100"
              }
              onClick={handleNewTodoPage}
            >
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
          {isAdding ? (
            <TodoAddMenu onClose={handleNewTodoPage} onAdd={handleAddNewTodo} />
          ) : null}
        </div>
      </PageLayout>
    </>
  );
}
