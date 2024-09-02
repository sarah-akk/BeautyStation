import React, { useState } from "react";

const Response = () => {
  const [response, setResponse] = useState("");

  const handleSend = () => {
    console.log("Response sent:", response);
    setResponse("");
  };

  const handleCancel = () => {
    setResponse("");
  };

  return (
    <div
      className="p-4 bg-white rounded shadow-md"
      style={{ direction: "rtl" }}
    >
      <h2 className="text-lg font-semibold mb-2">السؤال:</h2>
      <p className="mb-4 text-gray-700 bg-gray-100 p-2 rounded">
        {" "}
        هل يمكنني الحصول على خصم إذا قمت بحجز أكثر من خدمة؟
      </p>

      <h2 className="text-lg font-semibold mb-4">رد على الاستفسار</h2>
      <textarea
        className="w-full h-40 p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="اكتب ردك هنا..."
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />
      <div className="flex justify-between gap-4">
        <button
          className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
          onClick={handleSend}
        >
          إرسال
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          onClick={handleCancel}
        >
          إلغاء
        </button>
      </div>
    </div>
  );
};

export default Response;
