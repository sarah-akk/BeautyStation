/* eslint-disable @typescript-eslint/no-unused-vars */
import DatePicker from "react-datepicker";
import Table, { TableOperation } from "../../components/Table/Table";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

interface offer {
  id: number;
  offerName: string;
  businessName: string;
  amount: number;
  additionalInfo: string;
  date: string;
}

const offers: offer[] = [
  {
    id: 1,
    offerName: "تخفيضات الصيف",
    businessName: "مركز التجميل",
    amount: 500,
    additionalInfo: "عرض محدود الوقت",
    date: "2024-08-01",
  },
  {
    id: 2,
    offerName: "خصم العطلات",
    businessName: "مستحضرات التجميل",
    amount: 750,
    additionalInfo: "ينطبق على جميع مستحضرات التجميل",
    date: "2024-08-02",
  },
  {
    id: 3,
    offerName: "عرض الشتاء",
    businessName: "صالون الجمال",
    amount: 300,
    additionalInfo: "صيانة مجانية مع كل عملية شراء",
    date: "2024-08-03",
  },
  {
    id: 4,
    offerName: "العودة إلى المدرسة",
    businessName: "عالم الجمال",
    amount: 200,
    additionalInfo: "خصم 50% على منتجات العناية بالبشرة",
    date: "2024-08-04",
  },
  {
    id: 5,
    offerName: "الجمعة السوداء",
    businessName: "مستحضرات التجميل الكبيرة",
    amount: 1000,
    additionalInfo: "خصومات شاملة على الموقع",
    date: "2024-08-05",
  },
];

const UserOffers = () => {
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
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">سجل خدمات المستخدم</h2>
      </div>
      <label className="block text-sm font-bold text-gray-700">
        فلتر حسب التاريخ ..
      </label>
      <div className="flex flex-row justify-between">
        <div>
          <DatePicker
            selected={startDate}
            // onChange={(date: Date | null) => setStartDate(date)}
            className="border rounded p-2"
          />
        </div>
        <div className="bg-pink-600 font-bold rounded-lg p-2 text-center justify-center items-center text-white">
          العدد الكلي : 5
        </div>
      </div>
      <Table<offer>
        tableHeads={[
          "اسم الخدمة",
          " اسم المركز",
          "السعر",
          "معلومات اضافية",
          "التاريخ",
          "العمليات",
        ]}
        tableBody={offers}
        keys={["offerName", "businessName", "amount", "additionalInfo", "date"]}
        operations={operations}
      />
    </div>
  );
};

export default UserOffers;
