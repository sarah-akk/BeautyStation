import React from "react";

interface offer {
  id: number;
  offerName: string;
  businessName: string;
  amount: number;
  additionalInfo: string;
  date: string;
}

const UserOfferDetails = () => {
  const sampleOffer: offer = {
    id: 1,
    offerName: "تخفيضات الصيف",
    businessName: "مركز التجميل",
    amount: 500,
    additionalInfo: "عرض محدود الوقت",
    date: "2024-08-01",
  };
  return (
    <div className="p-4 shadow-md rounded-lg" style={{ direction: "rtl" }}>
      <h2 className="text-2xl font-bold mb-4">معلومات الخدمة :</h2>
      <div className="bg-slate-200 p-5 rounded-lg">
        <div className="mb-2">
          <strong>اسم الخدمة:</strong> {sampleOffer.offerName}
        </div>
        <div className="mb-2">
          <strong>اسم المركز:</strong> {sampleOffer.businessName}
        </div>
        <div className="mb-2">
          <strong>الكمية:</strong> ${sampleOffer.amount.toFixed(2)}
        </div>
        <div className="mb-2">
          <strong>معلومات اضافية:</strong> {sampleOffer.additionalInfo}
        </div>
        <div className="mb-2">
          <strong>التاريخ:</strong> {sampleOffer.date}
        </div>
      </div>
    </div>
  );
};

export default UserOfferDetails;
