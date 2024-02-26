/* eslint-disable react/prop-types */
export default function TodoItemPage({ todoName }) {
  return (
    <>
      <li className="flex items-center">
        <div className="flex gap-2">
          <img src="" alt="" width={20} height={20} />
          <p>{todoName}</p>
        </div>
        <button className="ml-auto">Delete</button>
      </li>
    </>
  );
}
