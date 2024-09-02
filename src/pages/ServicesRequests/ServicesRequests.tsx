/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import PopUpDelete from "../../components/PopUpDelete";
import { FaCheck, FaEye, FaSearch, FaTimes } from "react-icons/fa";
import Table, {
  TableButtonLink,
  TableOperation,
} from "../../components/Table/Table";

interface Offer {
  id: number | string;
  name: string;
  userName: string;
}

const offers: Offer[] = [
  {
    id: 1,
    name: "اسم الخدمة",
    userName: "مقدم الخدمة",
  },
  {
    id: 2,
    name: "اسم الخدمة",
    userName: "مقدم الخدمة",
  },
  {
    id: 3,
    name: "اسم الخدمة",
    userName: "مقدم الخدمة",
  },
];

const ServicesRequests = () => {
  const [showRejectModal, setShowRejectModal] = useState<
    number | string | null
  >(null);

  const handleReject = (id: number | string) => {
    // Handle the reject logic here
    setShowRejectModal(null);
  };

  const operations: TableOperation[] = [
    {
      name: "reject",
      icon: FaTimes,
      link: false,
      onClick(id) {
        setShowRejectModal(id);
      },
    },
  ];

  const links: TableButtonLink[] = [
    {
      link: "OfferDetails",
      name: "تفاصيل الخدمة",
    },
    {
      link: "serviceProviderDetails",
      name: "مقدم الخدمة",
    },
  ];

  return (
    <div className="container mx-auto p-4" style={{ direction: "rtl" }}>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-medium">طلبات الخدمات</h2>
      </div>
      <div className="relative mb-4 flex flex-row items-center">
        <FaSearch className="absolute right-52 text-gray-500" />
        <input
          type="text"
          className="w-1/5 p-2 pr-10 border rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="فلتر حسب الاسم"
        />
      </div>
      <Table<Offer>
        tableHeads={["اسم الخدمة", "العمليات", "تفاصيل"]}
        tableBody={offers}
        keys={["name"]}
        operations={operations}
        links={links}
      />

      {/* Reject Modal */}
      {showRejectModal !== null && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded p-4">
            <h2 className="text-lg font-semibold mb-4">تأكيد الرفض</h2>
            <p>هل أنت متأكد من رفض هذا الطلب؟</p>
            <div className="mt-4 flex justify-between gap-2">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => handleReject(showRejectModal)}
              >
                نعم
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setShowRejectModal(null)}
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesRequests;
