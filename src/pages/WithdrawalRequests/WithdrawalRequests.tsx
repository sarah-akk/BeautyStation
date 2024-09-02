/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import Table, { TableOperation } from "../../components/Table/Table";
import { FaCheck, FaSearch, FaTimes } from "react-icons/fa";

interface WithDraw {
  id: number | string;
  username: string;
  date: string;
  amount: number;
  restAmount: number;
  status: string;
}

const withdrawals: WithDraw[] = [
  {
    id: 1,
    username: "سارة محمود",
    date: "2024-09-01",
    amount: 5000,
    restAmount: 15000,
    status: "مكتمل",
  },
  {
    id: 2,
    username: "ليلى أحمد",
    date: "2024-09-03",
    amount: 3000,
    restAmount: 7000,
    status: "معلق",
  },
  {
    id: 3,
    username: "هند عبد الرحمن",
    date: "2024-09-05",
    amount: 4500,
    restAmount: 10500,
    status: "مكتمل",
  },
  {
    id: 4,
    username: "منى علي",
    date: "2024-09-07",
    amount: 2500,
    restAmount: 8500,
    status: "مرفوض",
  },
  {
    id: 5,
    username: "نورة إبراهيم",
    date: "2024-09-10",
    amount: 6000,
    restAmount: 9000,
    status: "مكتمل",
  },
];

const WithdrawalRequests = () => {
  const [showAcceptModal, setShowAcceptModal] = useState<
    number | string | null
  >(null);
  const [showRejectModal, setShowRejectModal] = useState<
    number | string | null
  >(null);

  const handleAccept = (id: number | string) => {
    // Handle the accept logic here
    setShowAcceptModal(null);
  };

  const handleReject = (id: number | string) => {
    // Handle the reject logic here
    setShowRejectModal(null);
  };

  const operations: TableOperation[] = [
    {
      name: "accept",
      icon: FaCheck,
      link: false,
      onClick(id) {
        setShowAcceptModal(id);
      },
    },
    {
      name: "reject",
      icon: FaTimes,
      link: false,
      onClick(id) {
        setShowRejectModal(id);
      },
    },
  ];

  return (
    <div className="container mx-auto p-4" style={{ direction: "rtl" }}>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-medium"> طلبات سحب الاموال</h2>
      </div>

      <div className="relative mb-4 flex flex-row items-center">
        <FaSearch className="absolute right-52 text-gray-500" />
        <input
          type="text"
          className="w-1/5 p-2 pr-10 border rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="فلتر حسب الاسم"
        />
      </div>

      <Table<WithDraw>
        tableHeads={[
          "اسم المستخدم",
          "تاريخ الطلب",
          "المبلغ",
          "المبلغ المتبقي",
          "حالة الحجز",
          "العمليات",
        ]}
        tableBody={withdrawals}
        keys={["username", "date", "amount", "restAmount", "status"]}
        operations={operations}
      />

      {/* Accept Modal */}
      {showAcceptModal !== null && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded p-4">
            <h2 className="text-lg font-semibold mb-4">تأكيد القبول</h2>
            <p>هل أنت متأكد من قبول هذا الطلب؟</p>
            <div className="mt-4 flex justify-between gap-2">
              <button
                className="px-4 py-2 bg-green-500 text-white rounded"
                onClick={() => handleAccept(showAcceptModal)}
              >
                نعم
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setShowAcceptModal(null)}
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}

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

export default WithdrawalRequests;
