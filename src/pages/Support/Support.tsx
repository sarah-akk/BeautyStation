import { useState } from "react";
import PopUpDelete from "../../components/PopUpDelete";
import { FaSearch, FaTrash } from "react-icons/fa";
import Table, {
  TableButtonLink,
  TableOperation,
} from "../../components/Table/Table";

interface SupportItem {
  id: number | string;
  userName: string;
  question: string;
  response?: string;
}

const supportItems: SupportItem[] = [
  {
    id: 1,
    userName: "أميرة حسين",
    question: "كيف يمكنني تغيير موعد الحجز الخاص بي؟",
    response: "من خلال القيام بكذا وكذا وكذا",
  },
  {
    id: 2,
    userName: "ليلى أحمد",
    question: "لماذا لم أستلم تأكيد الدفع بعد إتمام عملية الدفع؟",
  },
  {
    id: 3,
    userName: "سعاد عبد الله",
    question: "هل يمكنني إلغاء الحجز واسترداد المبلغ؟",
  },
  {
    id: 4,
    userName: "نورة إبراهيم",
    question: "ما هي أنواع الخدمات المتاحة في الصالون؟",
  },
  {
    id: 5,
    userName: "فاطمة الزهراء",
    question: "هل يمكنني الحصول على خصم إذا قمت بحجز أكثر من خدمة؟",
    response: "من خلال القيام بكذا وكذا وكذا",
  },
];

const Support = () => {
  const operations: TableOperation[] = [
    {
      name: "delete",
      icon: FaTrash,
      onClick(id) {
        setShowPopUpDelete([id, true]);
      },
    },
  ];

  const links: TableButtonLink[] = [
    {
      link: "response",
      name: "الرد",
    },
  ];

  const [showPopUpDelete, setShowPopUpDelete] = useState<
    [string | number, boolean]
  >(["", false]);

  return (
    <div className="container mx-auto p-4" style={{ direction: "rtl" }}>
      {showPopUpDelete[1] && (
        <PopUpDelete
          id={showPopUpDelete[0]}
          setVisible={setShowPopUpDelete}
          name="الشكوى"
        />
      )}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-medium">الشكاوى والاستفسارات</h2>
      </div>
      <div className="relative mb-4 flex flex-row items-center">
        <FaSearch className="absolute right-52 text-gray-500" />
        <input
          type="text"
          className="w-1/5 p-2 pr-10 border rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="فلتر حسب الاسم"
        />
      </div>
      <Table<SupportItem>
        tableHeads={[
          "اسم المستخدم",
          "الشكوى او الاستفسار",
          "اخر رد",
          "العمليات",
          "الرد",
        ]}
        tableBody={supportItems}
        keys={["userName", "question", "response"]}
        operations={operations}
        links={links}
      />
    </div>
  );
};

export default Support;
