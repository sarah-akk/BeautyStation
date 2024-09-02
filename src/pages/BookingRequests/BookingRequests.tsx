/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import Table, { TableOperation } from "../../components/Table/Table";
import { FaSearch, FaTimes } from "react-icons/fa";

interface Booking {
  id: number | string;
  username: string;
  seviceName: string;
  numberOfpersons: number;
  date: string;
  time: string;
  status: string;
  payWay: string;
  price: number;
}

const bookings: Booking[] = [
  {
    id: 1,
    username: "لينا عبد الله",
    seviceName: "تسريحة شعر",
    numberOfpersons: 1,
    date: "2024-09-10",
    time: "2:00 PM",
    payWay: "بطاقة ائتمان",
    status: "مثبت",
    price: 1000,
  },
  {
    id: 2,
    username: "فاطمة الزهراء",
    seviceName: "تدليك",
    numberOfpersons: 2,
    date: "2024-09-12",
    time: "2:00 PM",
    payWay: "نقدي",
    status: "غير مثبت",
    price: 2000,
  },
  {
    id: 3,
    username: "ربى محمد",
    seviceName: "مانيكير وباديكير",
    numberOfpersons: 1,
    date: "2024-09-15",
    time: "2:00 PM",
    payWay: "بطاقة ائتمان",
    status: "جاري التنفيذ",
    price: 3000,
  },
  {
    id: 4,
    username: "ليلى النمر",
    seviceName: "تجميل البشرة",
    numberOfpersons: 1,
    date: "2024-09-18",
    time: "2:00 PM",
    payWay: "نقدي",
    status: "مثبت",
    price: 4000,
  },
  {
    id: 5,
    username: "سارة جابر",
    seviceName: "قص شعر",
    numberOfpersons: 1,
    date: "2024-09-20",
    time: "2:00 PM",
    payWay: "بطاقة ائتمان",
    status: "غير مثبت",
    price: 5000,
  },
  {
    id: 6,
    username: "سارة جابر",
    seviceName: "قص شعر",
    numberOfpersons: 1,
    date: "2024-09-20",
    time: "2:00 PM",
    payWay: "بطاقة ائتمان",
    status: "مثبت",
    price: 5000,
  },
];

const BookingRequests = () => {
  const [showRejectModal, setShowRejectModal] = useState<
    number | string | null
  >(null);
  const [filter, setFilter] = useState<string>("الكل");

  const handleReject = (id: number | string) => {
    // Handle the reject logic here
    setShowRejectModal(null);
  };

  const handleFilterChange = (status: string) => {
    setFilter(status);
  };

  const filteredBookings = bookings.filter((booking) => {
    if (filter === "الكل") return true;
    return booking.status === filter;
  });

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

  return (
    <div className="container mx-auto p-4" style={{ direction: "rtl" }}>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-medium">طلبات الخدمات</h2>
      </div>

      <div className="mb-4 flex justify-center gap-4">
        <button
          className={`px-4 py-2 rounded ${
            filter === "الكل" ? "bg-pink-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleFilterChange("الكل")}
        >
          الكل
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filter === "مثبت" ? "bg-pink-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleFilterChange("مثبت")}
        >
          مثبت
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filter === "غير مثبت" ? "bg-pink-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleFilterChange("غير مثبت")}
        >
          غير مثبت
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filter === "جاري التنفيذ" ? "bg-pink-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleFilterChange("جاري التنفيذ")}
        >
          جاري التنفيذ
        </button>
      </div>

      <div className="relative mb-4 flex flex-row items-center">
        <FaSearch className="absolute right-52 text-gray-500" />
        <input
          type="text"
          className="w-1/5 p-2 pr-10 border rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="فلتر حسب الاسم"
        />
      </div>

      <Table<Booking>
        tableHeads={[
          "اسم المستخدم",
          "اسم الخدمة",
          "عدد الاشخاص",
          "تاريخ الحجز",
          "وقت الخجز",
          "سعر الحجز",
          "طريقة الدفع",
          "حالة الحجز",
          "العمليات",
        ]}
        tableBody={filteredBookings}
        keys={[
          "username",
          "seviceName",
          "numberOfpersons",
          "date",
          "time",
          "price",
          "payWay",
          "status",
        ]}
        operations={operations}
      />

      {/* Reject Modal */}
      {showRejectModal !== null && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded p-4">
            <h2 className="text-lg font-semibold mb-4">تأكيد الإلغاء</h2>
            <p>هل أنت متأكد من إلغاء هذا الطلب؟</p>
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

export default BookingRequests;
