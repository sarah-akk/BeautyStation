import React from "react";

import ID from "../../../assets/ID.jpg";

const IDphoto = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
      {/* Profile image container */}
      <div className="w-1/3 mb-4 overflow-hidden rounded-sm border-4 border-gray-300">
        <img
          src={ID}
          alt="Personal Identity"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Descriptive text */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        صورة الهوية الشخصية
      </h2>
    </div>
  );
};

export default IDphoto;
