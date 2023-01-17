import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-red-500">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-white mx-1.5 text-xl hover:text-white hover:bg-red-500
        duration-300 "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
