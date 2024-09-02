import React from "react";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.jpg";

interface ServiceProvider {
  id: number | string;
  images: string[];
  name: string;
  WorkHours: string[];
  address: string;
  rating: string;
  description: string;
}

const exampleProvider: ServiceProvider = {
  id: 1,
  images: [image1, image2, image3],
  name: "إميلي جونسون",
  WorkHours: ["9:00 ص - 5:00 م", "الإثنين - الجمعة"],
  address: "شارع محمد عبد المجيد , المدينة المنورة",
  rating: "4.5",
  description:
    "وصف وصف وصف وصف وصف وصف وصف وصف وصف وصف وصف وصف وصف وصف وصف وصف وصف وصف",
};

const ServiceProviderDetails = () => {
  return (
    <div
      className="p-6 bg-white rounded shadow-md"
      style={{ direction: "rtl" }}
    >
      <div className="flex items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold">{exampleProvider.name}</h2>
          <div className="flex space-x-4">
            {exampleProvider.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${exampleProvider.name} - ${index + 1}`}
                className="w-32 h-32  mt-6 mb-6 ml-4 rounded-md"
              />
            ))}
          </div>
          <p className="text-gray-600">{exampleProvider.address}</p>
          <p className="text-pink-600 font-bold">
            التقييم: {exampleProvider.rating}
          </p>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-medium">ساعات العمل</h3>
        <ul className="list-disc list-inside text-gray-700">
          {exampleProvider.WorkHours.map((hour, index) => (
            <li key={index}>{hour}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-medium">وصف:</h3>
        <p className="text-gray-700">{exampleProvider.description}</p>
      </div>
    </div>
  );
};

export default ServiceProviderDetails;
