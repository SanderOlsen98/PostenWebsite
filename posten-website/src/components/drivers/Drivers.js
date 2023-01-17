import React, { useState } from "react";

function Drivers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleButtonClick = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleButtonClick("Drivers Sentrum")}
        >
          Sentrum
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={() => handleButtonClick("Drivers Fillipstad:")}
        >
          Fillipstad
        </button>
        {isModalOpen && (
          <div className=" fixed top-[30%] right-[50%] bg-gray-900 opacity-75">
            <div className="relative m-auto p-6 bg-white rounded-lg">
              <p>{modalContent}</p>
              <button onClick={() => setIsModalOpen(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Drivers;
