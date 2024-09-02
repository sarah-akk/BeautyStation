import React from "react";

interface payment {
  id: number;
  description: string;
  price: number;
  date: string;
  paymentWay: string;
}

const UserPaymentDetails = () => {
  const samplePayment: payment = {
    id: 1,
    description: "بطاقة ائتمان",
    price: 199.99,
    date: "2024-08-01",
    paymentWay: "Credit Card",
  };

  return (
    <div className="p-4  shadow-md rounded-lg" style={{ direction: "rtl" }}>
      <h2 className="text-2xl font-bold mb-4">معلومات الدفعة :</h2>
      <div className="bg-slate-200 p-5 rounded-lg">
        <div className="mb-2 bg-slate-200">
          <strong>الوصف:</strong> {samplePayment.description}
        </div>
        <div className="mb-2">
          <strong>السعر:</strong> ${samplePayment.price.toFixed(2)}
        </div>
        <div className="mb-2">
          <strong>التاريخ:</strong> {samplePayment.date}
        </div>
        <div className="mb-2">
          <strong>طريقة الدفع:</strong> {samplePayment.paymentWay}
        </div>
      </div>
    </div>
  );
};

export default UserPaymentDetails;
