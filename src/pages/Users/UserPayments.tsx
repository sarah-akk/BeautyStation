/* eslint-disable @typescript-eslint/no-unused-vars */
import DatePicker from "react-datepicker";
import Table, { TableOperation } from "../../components/Table/Table";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

interface payment {
  id: number;
  description: string;
  price: number;
  date: string;
  paymentWay: string;
}

const payments: payment[] = [
  {
    id: 1,
    description: "باقة الذهب",
    price: 199.99,
    date: "2024-08-01",
    paymentWay: "بطاقة ائتمان",
  },
  {
    id: 2,
    description: "باقة الفضة",
    price: 149.99,
    date: "2024-08-02",
    paymentWay: "بايبال",
  },
  {
    id: 3,
    description: "باقة البلاتين",
    price: 299.99,
    date: "2024-08-03",
    paymentWay: "تحويل بنكي",
  },
  {
    id: 4,
    description: "باقة البرونز",
    price: 99.99,
    date: "2024-08-04",
    paymentWay: "بطاقة ائتمان",
  },
  {
    id: 5,
    description: "باقة الذهب",
    price: 199.99,
    date: "2024-08-05",
    paymentWay: "بايبال",
  },
];

const UserPayments = () => {
  const operations: TableOperation[] = [
    {
      name: "show",
      icon: FaEye,
      link: true,
    },
  ];

  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div className="p-10 flex flex-col gap-5" style={{ direction: "rtl" }}>
      <div className=" flex justify-between items-center">
        <h2 className="text-xl font-bold">سجل مدفوعات المستخدم</h2>
      </div>
      <label className="  block text-sm font-bold text-gray-700">
        فلتر حسب التاريخ ..
      </label>
      <div className="flex flex-row justify-between">
        <div>
          <DatePicker
            selected={startDate}
            // onChange={}
            className="border rounded p-2 z-50"
          />
        </div>
        <div className="bg-pink-600 font-bold rounded-lg p-2 text-center justify-center items-center text-white">
          الكمية الكلية المدفوعة: 1000
        </div>
      </div>
      <Table<payment>
        tableHeads={["وصف", "السعر", "التاريخ", "طريقة الدفع", "العمليات"]}
        tableBody={payments}
        keys={["description", "price", "date", "paymentWay"]}
        operations={operations}
      />
    </div>
  );
};

export default UserPayments;
