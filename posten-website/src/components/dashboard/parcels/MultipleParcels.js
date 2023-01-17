import { useState, useEffect } from "react";
import React from "react";
import List from "./List";
import { v4 as uuidv4 } from "uuid";
import Pickup from "./Pickup";

const getLocalStorage = () => {
  let items = localStorage.getItem("items");
  if (items) {
    return JSON.parse(localStorage.getItem("items"));
  } else {
    return [];
  }
};

function MultiplyParcels() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(getLocalStorage());

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItems = {
      id: uuidv4(),
      title: text,
    };
    setItems([newItems, ...items]);
    setText("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className=" w-[600px] py-10">
        <form onSubmit={handleSubmit} className=" relative">
          <input
            type="text"
            name="text"
            placeholder="Levering..."
            className="  bg-red-200 rounded-lg text-black w-full py-3 px-3"
            autoComplete="on"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>

        <List items={items} setItems={setItems} deleteItem={deleteItem} />
      </div>
      {/* <div className=" w-full py-12">
        <Pickup items={items} setItems={setItems} deleteItem={deleteItem} />
      </div> */}
    </>
  );
}

export default MultiplyParcels;
