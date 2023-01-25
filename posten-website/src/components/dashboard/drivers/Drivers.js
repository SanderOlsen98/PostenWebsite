import React from "react";
import Popup from "../popup/Popup";
import { useState, useEffect } from "react";

function Dashboard() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [colour, setColor] = useState("");
  const [changeColor, setChangeColor] = useState("null");

  const click = (colour) => {
    setColor(colour);
    document.getElementById(changeColor).style.backgroundColor = [colour];
    setButtonPopup(false);
    console.log(colour);
  };

  return (
    <div className=" col-span-2 border-gray-200 items-center justify-center flex w-full py-24">
      <div className="w-full items-center justify-center flex flex-col px-5 pb-6">
        <h1 className=" text-lg font-bold">Sjåfører</h1>
        <div className=" py-12">
          <button className="bg-red-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:bg-red-700 hover:text-white py-4">
            Koordinator - Madeleine
            <p>+4799999999</p>
          </button>
        </div>
        <div className=" grid grid-rows-2 grid-flow-col gap-1 border-t py-3 border-b md:row md:flex-col">
          <div className=" py-2">
            <button
              id="Knut"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Knut");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Knut
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Espen"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Espen");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Espen
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Alexandros"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Alexandros");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Alexandros
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Lars"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Lars");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Lars
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Andre"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Andre");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Andre
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Backer"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Backer");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Backer
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Hugo"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Hugo");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Sander
            </button>
          </div>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 className=" text-center">Hvordan ser dagen din ut i dag?</h3>
        <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
          <div className="py-4">
            {/* Change colour to green */}
            <button
              onClick={() => {
                click("#22c55e");
              }}
              className="p-1 bg-green-500 rounded relative justify-center items-center px-24 py-4"
            >
              Bra dag
            </button>
          </div>
          <div className="py-3">
            {/* Change colour to orange */}
            <button
              onClick={() => {
                click("#f97316");
              }}
              className="p-1 bg-orange-500 rounded relative justify-center items-center px-20 py-4"
            >
              Litt Usikker
            </button>
          </div>
          <div className="py-3">
            {/* Change colour to red */}
            <button
              onClick={() => {
                click("#dc2626");
              }}
              className="p-1 bg-red-600 rounded relative justify-center items-center px-20 py-4"
            >
              Trenger Hjelp!
            </button>
          </div>
          <div className="py-3">
            {/* Reset Colour */}
            <button
              onClick={() => {
                click("#d1d5db");
              }}
              className="p-1 bg-gray-300 rounded relative justify-center items-center px-8 py-2"
            >
              Reset
            </button>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default Dashboard;
