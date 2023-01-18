import React, { useState } from "react";
import sentrumImage from "../../img/postenbring.jpeg";

const Drivers = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    names: [],
    picture: "",
  });

  const handleButtonClick = (title, names, picture) => {
    setModalData({ title, names, picture });
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  function imageSentrum() {
    const sentrumImage = {
      backgroundImage: `url(${sentrumImage})`,
    };
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4"
        onClick={() =>
          handleButtonClick(
            "Sentrum",
            [
              "Kjell A Haugen",
              "Steinar",
              "Kitto",
              "Steinar",
              "Steinar",
              "Steinar",
              "Steinar",
            ],
            "postenbring.jpg"
          )
        }
      >
        Sentrum
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() =>
          handleButtonClick("Fillipstad", ["Name 3", "Name 4"], "image2.jpg")
        }
      >
        Fillipstad
      </button>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="relative w-11/12 md:w-9/12 lg:w-6/12 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all">
            <div className="absolute top-0 right-0 pt-4 pr-4">
              <button
                className="text-black font-medium cursor-pointer"
                onClick={closeModal}
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <div className="text-center">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  {modalData.title}
                </h2>
              </div>
              <div className="mt-5">
                <ul>
                  {modalData.names.map((name, index) => (
                    <li
                      key={index}
                      className="text-base leading-6 font-medium text-gray-900"
                    >
                      <a href="#" className="hover:underline">
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img src={modalData.picture} alt="modal" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Drivers;
