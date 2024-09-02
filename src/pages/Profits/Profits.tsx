import React from "react";
import Table from "../../components/Table/Table";
// import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

interface Payment {
  id: number | string;
  username: string;
  seviceName: string;
  date: string;
  status: string;
  payWay: string;
  price: number;
}

const payments: Payment[] = [
  {
    id: 1,
    username: "منى خالد",
    seviceName: "تسريحة شعر",
    date: "2024-09-05",
    status: "مكتمل",
    payWay: "بطاقة ائتمان",
    price: 1500,
  },
  {
    id: 2,
    username: "سارة علي",
    seviceName: "تدليك",
    date: "2024-09-07",
    status: "مكتمل",
    payWay: "نقدي",
    price: 2500,
  },
  {
    id: 3,
    username: "أمينة سليمان",
    seviceName: "مانيكير وباديكير",
    date: "2024-09-10",
    status: "مكتمل",
    payWay: "بطاقة ائتمان",
    price: 2000,
  },
  {
    id: 4,
    username: "ليلى عبد الرحمن",
    seviceName: "تجميل البشرة",
    date: "2024-09-12",
    status: "مكتمل",
    payWay: "نقدي",
    price: 3000,
  },
  {
    id: 5,
    username: "فاطمة الزهراء",
    seviceName: "قص شعر",
    date: "2024-09-15",
    status: "مكتمل",
    payWay: "بطاقة ائتمان",
    price: 1800,
  },
];

const calculateTotalPayments = (payments: Payment[]) => {
  const totalPayments = payments.reduce(
    (sum, payment) => sum + payment.price,
    0
  );
  const appProfit = totalPayments * 0.05;
  return { totalPayments, appProfit };
};

const { totalPayments, appProfit } = calculateTotalPayments(payments);

const Profits = () => {
  return (
    <div className="container mx-auto p-4" style={{ direction: "rtl" }}>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-medium">الدفعات</h2>
      </div>

      {/* Display Total Payments and App Profit */}
      <div className="flex justify-around mb-8">
        <div className="bg-white p-4 rounded shadow-md w-1/3">
          <h3 className="text-xl font-semibold text-gray-700">
            إجمالي الدفعات
          </h3>
          <p className="text-2xl font-bold text-pink-600">
            {totalPayments} ريال
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow-md w-1/3">
          <h3 className="text-xl font-semibold text-gray-700">
            ربح التطبيق (5%)
          </h3>
          <p className="text-2xl font-bold text-blue-600">{appProfit} ريال</p>
        </div>
      </div>

      {/* Table Display */}
      <Table<Payment>
        tableHeads={[
          "اسم المستخدم",
          "اسم الخدمة",
          "تاريخ الدفعة",
          "سعر الطلب",
          "طريقة الدفع",
          "حالة الدفعة",
        ]}
        tableBody={payments}
        keys={["username", "seviceName", "date", "price", "payWay", "status"]}
      />

      {/* Simple Chart */}
      {/* <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">إجمالي الدفعات الشهرية</h3>
        <Bar
          data={{
            labels: payments.map((payment) => payment.date),
            datasets: [
              {
                label: "المبلغ بالريال",
                data: payments.map((payment) => payment.price),
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div> */}
    </div>
  );
};

export default Profits;
