import { IoClose, IoCheckmarkSharp } from "react-icons/io5";

const List = ({ items, setItems, deleteItem }) => {
  return (
    <>
      <div>
        <h1 className=" text-lg font-bold justify-start items-start">Hentet</h1>
      </div>
      <article>
        <ul className=" bg-gray-300 rounded mt-5 justify-center items-center mx-5 sm:max-w-xl sm:mx-auto">
          {items.map(({ id, title }) => (
            <ul className=" flex items-center justify-between border-b border-gray-200 px-5">
              <li
                key={id}
                className="text-black py-3  tracking-wider todo-list"
              >
                {title}
              </li>
              <button
                className=" text-xl justify-end items-end"
                onClick={() => deleteItem(id)}
              >
                <IoCheckmarkSharp className="text-green-600" />
              </button>
            </ul>
          ))}

          <ul className=" flex px-5 py-3 justify-between">
            <li>
              <p className="text-sm text-gray-400">
                {items.length} Leveranser Levert
              </p>
            </li>
            <li>
              <button
                className="text-sm text-gray-400"
                onClick={() => setItems([])}
              >
                Tøm Liste
              </button>
            </li>
          </ul>
        </ul>
      </article>
    </>
  );
};

export default List;
