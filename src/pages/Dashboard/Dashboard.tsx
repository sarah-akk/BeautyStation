/* eslint-disable @typescript-eslint/no-unused-vars */
import DatePicker from "react-datepicker";
import { useState } from "react";
import LatestUserPayments from "./LatestUsers";
import SalonProfitTable from "./TopOffers";

const Dashboard = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <>
      <div
        className="flex justify-between mb-3  items-center overflow-hidden mt-5 p-2"
        style={{ direction: "rtl" }}
      >
        <div>
          <label className="  block text-sm font-bold text-gray-700">
            ابحث حسب التاريخ :
          </label>
          <DatePicker
            selected={startDate}
            // onChange={}
            className="border rounded p-2"
          />
        </div>
      </div>
      <div className="flex flex-row w-full p-2 shadow-lg ">
        <SalonProfitTable />
      </div>
      <div className="gap-4 p-2 shadow-lg ">
        <LatestUserPayments />
      </div>
    </>
  );
};

export default Dashboard;
