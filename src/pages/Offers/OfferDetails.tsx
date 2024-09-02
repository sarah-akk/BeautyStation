import React from "react";
import Data from "../../components/Data";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.jpg";

interface ServiceDetailsProps {
  name: string;
  images: string[];
  rating: string;
  description: string;
  workHours: string[];
}

const serviceDetails: ServiceDetailsProps = {
  name: "اسم الخدمة",
  images: [image1, image2, image3],
  rating: "4.8",
  description: "وصف مفصل للخدمة المقدمة.",
  workHours: ["9:00 ص - 5:00 م", "الإثنين - الجمعة"],
};

const OfferDetails = () => {
  return (
    <div className="p-10 flex flex-col gap-10 " style={{ direction: "rtl" }}>
      <h1 className="text-3xl font-bold">{serviceDetails.name}</h1>
      <div className="w-[90%] mx-auto bg-gray-200 rounded-lg p-5 flex flex-col gap-4">
        <div className="flex gap-4">
          {serviceDetails.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${serviceDetails.name} - ${index + 1}`}
              className="w-24 h-24 rounded-lg"
            />
          ))}
        </div>
        <Data title="اسم الخدمة" text={serviceDetails.name} />
        <p className="text-pink-600 font-bold">
          التقييم: {serviceDetails.rating}
        </p>{" "}
        <Data title="الوصف" text={serviceDetails.description} />
        <div>
          <h3 className="text-lg font-medium">ساعات العمل:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {serviceDetails.workHours.map((hour, index) => (
              <li key={index}>{hour}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
