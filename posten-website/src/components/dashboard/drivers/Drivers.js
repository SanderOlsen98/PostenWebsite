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
    <div className=" col-span-2 border-gray-200 items-start justify-start flex w-full py-24">
      <div className="w-full items-start justify-start flex flex-col px-5 pt-12 pb-6">
        <h1 className=" text-lg font-bold">Sjåfører</h1>
        <div className=" py-12">
          <button className="bg-red-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:bg-red-700 hover:text-white py-4">
            Koordinator - Madeleine
          </button>
        </div>
        <div className=" grid grid-rows-6 grid-flow-col gap-1 border-t py-3 border-b md:row md:flex-col">
          <div className=" py-2">
            <button
              id="Burhan"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Burhan");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Burhan
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Kjell A H"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Kjell A H");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Kjell A H
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Zoran"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Zoran");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Zoran
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Kitto"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Kitto");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Kitto
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Shaho"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Shaho");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Shaho
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Anne-Bente"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Anne-Bente");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Anne-Bente
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
              Hugo
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Steinar"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Steinar");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Steinar
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Hussain"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Hussain");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Hussain
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Waseem"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Waseem");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Waseem
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Saeed"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Saeed");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Saeed
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Kurt"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Kurt");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Kurt
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Tor"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Tor");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32 sm:flex-row"
            >
              Tor
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Sebastian"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Sebastian");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Sebastian
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Sander"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Sander");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Sander
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Steffen"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Steffen");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Steffen
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Emil"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Emil");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Emil
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Simon"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Simon");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Simon
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Roy B"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Roy B");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Roy B
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Erik"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Erik");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Erik
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Kjell A S"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Kjell A S");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Kjell A S
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Tobias"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Tobias");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Tobias
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
