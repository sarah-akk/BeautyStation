/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import Table, {
  TableButtonLink,
  TableOperation,
} from "../../components/Table/Table";
import { FaEye, FaSearch, FaCheck, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import ID from "../../assets/ID.jpg";

interface Request {
  id: number | string;
  name: string;
  address: string;
}

const ProvidersRequests: Request[] = [
  {
    id: 1,
    name: "جون دو",
    address: "شارع محمد عبد المجيد , المدينة المنورة",
  },
  {
    id: 2,
    name: "جين سميث",
    address: "شارع محمد عبد المجيد , المدينة المنورة",
  },
  {
    id: 3,
    name: "إميلي جونسون",
    address: "شارع محمد عبد المجيد , المدينة المنورة",
  },
  {
    id: 4,
    name: "مايكل براون",
    address: "شارع محمد عبد المجيد , المدينة المنورة",
  },
  {
    id: 5,
    name: "سارة ويلسون",
    address: "شارع محمد عبد المجيد , المدينة المنورة",
  },
];

const ProvidersRequest = () => {
  const path = useLocation();

  const [showPhotoModal, setShowPhotoModal] = useState<number | string | null>(
    null
  );

  const [showAcceptModal, setShowAcceptModal] = useState<
    number | string | null
  >(null);
  const [showRejectModal, setShowRejectModal] = useState<
    number | string | null
  >(null);

  useEffect(() => {
    if (path.pathname.includes("PhotoID")) {
      const photoID = path.pathname.split("/").pop();
      setShowPhotoModal(null);
    } else {
      setShowPhotoModal(null);
    }
  }, [path.pathname]);

  const handleAccept = (id: number | string) => {
    // Handle the accept logic here
    setShowAcceptModal(null);
  };

  const handleReject = (id: number | string) => {
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

  const links: TableButtonLink[] = [
    {
      link: "serviceProviderDetails",
      name: "تفاصيل",
    },
    {
      link: "IDphoto",
      name: "الهوية الشخصية",
    },
  ];

  return (
    <div className="container mx-auto p-4" style={{ direction: "rtl" }}>
      {showPhotoModal && (
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
          {/* Profile image container */}
          <div className="w-1/3 mb-4 overflow-hidden rounded-sm border-4 border-gray-300">
            <img
              src={ID}
              alt="Personal Identity"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Descriptive text */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            صورة الهوية الشخصية
          </h2>
        </div>
      )}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-medium">توثيق حسابات مقدمي الخدمات</h2>
      </div>
      <div className="relative mb-4 flex flex-row items-center">
        <FaSearch className="absolute right-52 text-gray-500" />
        <input
          type="text"
          className="w-1/5 p-2 pr-10 border rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="فلتر حسب الاسم"
        />
      </div>
      <Table<Request>
        tableHeads={["مقدم الخدمة", "العنوان", "العمليات", "الخدمات"]}
        tableBody={ProvidersRequests}
        keys={["name", "address"]}
        operations={operations}
        links={links}
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

export default ProvidersRequest;
