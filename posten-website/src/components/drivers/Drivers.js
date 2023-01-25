import React, { useState, useEffect } from "react";

function Drivers() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalData, setModalData] = useState(null);

  const button1Data = {
    title: "Sentrum",
    names: [
      {
        name: "Alice",
        image: "https://example.com/alice.jpg",
        description:
          "Alice is a software developer with 5 years of experience.",
        route: "120938",
        birthday: "19.03.2000",
      },
      {
        name: "Bob",
        image: "https://example.com/bob.jpg",
        description: "Bob is a graphic designer with 3 years of experience.",
        route: "120938",
        birthday: "19.03.2000",
      },
      {
        name: "Charlie",
        image: "https://example.com/charlie.jpg",
        description: "Charlie is a marketer with 7 years of experience.",
        route: "120938",
        birthday: "19.03.2000",
      },
      {
        name: "David",
        image: "https://example.com/david.jpg",
        description: "David is a project manager with 10 years of experience.",
        route: "120938",
        birthday: "19.03.2000",
      },
    ],
  };

  const button2Data = {
    title: "Fillipstad",
    names: [
      {
        name: "Eve",
        image: "https://example.com/eve.jpg",
        description: "Eve is a content writer with 2 years of experience.",
        route: "120938",
        birthday: "19.03.2000",
      },
      {
        name: "Frank",
        image: "https://example.com/frank.jpg",
        description: "Frank is a data analyst with 4 years of experience.",
        route: "120938",
        birthday: "19.03.2000",
      },
      {
        name: "George",
        image: "https://example.com/george.jpg",
        description:
          "George is a front-end developer with 6 years of experience.",
        route: "120938",
        birthday: "19.03.2000",
      },
      {
        name: "Hannah",
        image: "https://example.com/hannah.jpg",
        description: "Hannah is a product manager with 8 years of experience.",
        route: "120938",
        birthday: "19.03.2000",
      },
    ],
  };

  return (
    <div className={`h-screen ${modalOpen ? "bg-gray-800" : ""}`}>
      <div className="flex items-center justify-center h-full">
        <button
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          onClick={() => {
            setModalOpen(true);
            setModalData(button1Data);
          }}
        >
          {button1Data.title}
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          onClick={() => {
            setModalOpen(true);
            setModalData(button2Data);
          }}
        >
          {button2Data.title}
        </button>
        {modalOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="w-11/12 h-11/12 bg-white p-4 rounded-lg">
              <div className="text-center font-bold text-xl">
                {modalData.title}
              </div>
              <div className="flex">
                <div className="w-1/2">
                  <ul>
                    {modalData.names.map((person) => (
                      <li
                        key={person.name}
                        onClick={() => setSelectedItem(person)}
                        className={`cursor-pointer ${
                          selectedItem?.name === person.name ? "font-bold" : ""
                        }`}
                      >
                        {person.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-1/2 pl-4">
                  {selectedItem && (
                    <div>
                      <div>Selected: {selectedItem.name}</div>
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.name}
                        className="w-32 h-32 rounded-lg"
                      />
                      <div>{selectedItem.description}</div>
                      <div>Rute: {selectedItem.route}</div>
                      <div>Birthday: {selectedItem.birthday}</div>
                    </div>
                  )}
                </div>
              </div>
              <button
                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drivers;
